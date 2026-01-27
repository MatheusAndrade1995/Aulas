// Function to validate credit card number, determine the bandeira (brand), and validate expiration date
function validateCreditCard(cardNumber, dataValidade) {
    try {
        // Remove spaces and dashes from card number
        cardNumber = cardNumber.replace(/\s+/g, '').replace(/-/g, '');

        // Check if card number is all digits and length between 13-19
        if (!/^\d{13,19}$/.test(cardNumber)) {
            throw new Error('Número do cartão inválido: deve conter apenas dígitos e ter entre 13 e 19 caracteres.');
        }

        // Use isValidLuhn for card number validity
        if (!isValidLuhn(cardNumber)) {
            throw new Error('Falha na validação Luhn: número do cartão inválido.');
        }

        // Determine bandeira using regex patterns and digit length
        const cardPatterns = [
            // Visa: starts with 4, 13-19 digits
            { bandeira: 'Visa', regex: /^4\d{12,18}$/ },

            // Mastercard: 51-55 or 2221-2720, 16 digits
            { bandeira: 'Mastercard', regex: /^(5[1-5]\d{14}|2(2[2-9][1-9]|2[3-9]\d|[3-6]\d{2}|7([01]\d|20))\d{12})$/ },

            // American Express: 34 or 37, 15 digits
            { bandeira: 'American Express', regex: /^3[47]\d{13}$/ },

            // Elo: specific BINs, 16 digits
            { bandeira: 'Elo', regex: /^(401178|431274|5067\d{2}|627780|636297)\d{10}$/ },

            // Diners Club: 30, 36, 38, 39, 14-16 digits
            { bandeira: 'Diners Club', regex: /^3(0\d{2}|[689]|9)\d{11,13}$/ },

            // Discover: 6011, 622126-622925, 644-649, 65, 16 digits
            { bandeira: 'Discover', regex: /^(6011\d{12}|65\d{14}|64[4-9]\d{13}|622(12[6-9]|1[3-9]\d|[2-8]\d{2}|9([01]\d|2[0-5]))\d{10})$/ },

            // Hipercard: 38 or 60, 16 digits
            { bandeira: 'Hipercard', regex: /^(38|60)\d{14}$/ },

            // JCB: starts with 35, 16 digits
            { bandeira: 'JCB', regex: /^35\d{14}$/ },

            // Aura: starts with 50, 16 digits
            { bandeira: 'Aura', regex: /^50\d{14}$/ },

            // UnionPay: starts with 62, 16-19 digits
            { bandeira: 'UnionPay', regex: /^62\d{14,17}$/ },

            // Maestro: 50, 56-69, 12-19 digits
            { bandeira: 'Maestro', regex: /^(5[06-9]|6\d)\d{10,17}$/ },

            // Cabal: 58 or 60, 14-19 digits
            { bandeira: 'Cabal', regex: /^(58|60)\d{12,17}$/ },
        ];

        let bandeira = null;
        for (const pattern of cardPatterns) {
            if (pattern.regex.test(cardNumber)) {
                bandeira = pattern.bandeira;
                break;
            }
        }
        if (!bandeira) {
            throw new Error('Bandeira do cartão não reconhecida.');
        }

        // Validate expiration date
        let expirationValid = false;
        if (!dataValidade || !/^\d{2}\/\d{2}$/.test(dataValidade)) {
            throw new Error('Data de validade inválida. Use o formato MM/AA.');
        }
        const [month, year] = dataValidade.split('/').map(Number);
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100; // Last two digits
        const currentMonth = currentDate.getMonth() + 1; // 1-12
        const expYear = 2000 + year; // Assuming 20xx
        if (month < 1 || month > 12) {
            throw new Error('Mês de validade inválido.');
        }
        if (expYear < currentDate.getFullYear() || (expYear === currentDate.getFullYear() && month < currentMonth)) {
            throw new Error('Cartão expirado.');
        }
        expirationValid = true;

        return { valid: true, bandeira, expirationValid };
    } catch (error) {
        return { valid: false, bandeira: null, expirationValid: false, error: error.message };
    }
}

// CVV validation: expects brand string, not object
function isValidCVV(cvv, brand) {
    try {
        if (cvv == null || cvv === '') {
            throw new Error('CVV não pode ser vazio.');
        }
        if (brand === 'American Express') {
            if (!/^\d{4}$/.test(cvv)) {
                throw new Error('CVV inválido para American Express. Deve conter exatamente 4 dígitos.');
            }
        } else {
            if (!/^\d{3}$/.test(cvv)) {
                throw new Error(`CVV inválido para ${brand || 'essa bandeira'}. Deve conter exatamente 3 dígitos.`);
            }
        }
        return true;
    } catch (error) {
        return error.message;
    }
}


// Luhn validation (already present, just ensure it's used)
function isValidLuhn(number) {
    try {
        let sum = 0;
        let shouldDouble = false;
        for (let i = number.length - 1; i >= 0; i--) {
            let digit = parseInt(number[i], 10);
            if (isNaN(digit)) {
                throw new Error('Número do cartão contém caracteres inválidos para Luhn.');
            }
            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }
            sum += digit;
            shouldDouble = !shouldDouble;
        }
        if (sum % 10 !== 0) {
            throw new Error('Falha na validação Luhn: número do cartão inválido.');
        }
        return true;
    } catch (error) {
        return error.message;
    }
}



// Example test for all validations
const testCard = '376200104295615';
const testDate = '12/26';
const testCVV = '1234';
const result = validateCreditCard(testCard, testDate);
console.log(result);
console.log('CVV:', isValidCVV(testCVV, result.bandeira));
console.log('Luhn:', isValidLuhn(testCard));

