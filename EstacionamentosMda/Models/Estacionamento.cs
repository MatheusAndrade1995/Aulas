using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstacionamentosMda.Models
{

    public class Estacionamento
    {
        private decimal valorInicial = 0;
        private decimal valorPorHora = 0;
        private List<string> veiculos = new List<string>();

        public Estacionamento(decimal valorInicial, decimal valorPorHora)
        {
            this.valorInicial = valorInicial;
            this.valorPorHora = valorPorHora;
        }

        public void AdicionarVeiculo()
        {
            Console.WriteLine("Digite a placa do veículo:");
            string placa = Console.ReadLine();

            veiculos.Add(placa);
        }

        public void RemoverVeiculo()
        {
            Console.WriteLine("Digite a placa do veículo a ser removido ");
            string placa = Console.ReadLine();

            if (veiculos.Any(x => x.ToUpper() == placa.ToUpper()))
            {
                Console.WriteLine("Quanto tempo o veiculo permaneceu no estacionamento? ");
                string horas = Console.ReadLine();

                decimal valorDePagamento = valorInicial + valorPorHora * int.Parse(horas);


                Console.WriteLine($"O veículo de placa {placa} foi removido e o valor total a ser pago é de R$ {valorDePagamento}");

                veiculos.Remove(placa);

            }
            else
            {
                Console.WriteLine("Desculpe, não foi possível localizar o veiculo em nosso estacionamento, verifique se a placa foi digitada corretamente.");
            }
            
        }

        public void ListarVeiculos()
        {
            if (veiculos.Any())
            {
                Console.WriteLine("Os veículos estacionados são: ");
                foreach (var veiculo in veiculos)
                {
                    Console.WriteLine($"{veiculo}");
                }
            }
            else
            {
                Console.WriteLine("Não há veículos no nosso estabelecimento no momento");
            }
        }
    }
}