using EstacionamentosMda.Models;

Console.OutputEncoding = System.Text.Encoding.UTF8;

decimal valorInicial = 0;
decimal valorPorHora = 0;


Console.WriteLine("Seja bem vindo ao sistema de estacionamento MDA!");

Console.WriteLine("Defina o preço inicial: ");
valorInicial = Convert.ToDecimal(Console.ReadLine());

Console.WriteLine("Defina o preço por hora: ");
valorPorHora = Convert.ToDecimal(Console.ReadLine());

Estacionamento estacionamentoMda = new Estacionamento(valorInicial, valorPorHora);

string opcao = string.Empty;
bool exibirMenu = true;

while (exibirMenu)
{
    Console.Clear();
    Console.WriteLine("Selecione uma das opções:");
    Console.WriteLine("1 - Cadastrar novo veículo");
    Console.WriteLine("2 - Remover veículo");
    Console.WriteLine("3 - Listar veículos ainda no estacionamento");
    Console.WriteLine("4 - Encerrar sistema");

    switch (Console.ReadLine())
    {
        case "1":
            estacionamentoMda.AdicionarVeiculo();
            break;
        
        case "2":
            estacionamentoMda.RemoverVeiculo();
            break;

        case "3":
            estacionamentoMda.ListarVeiculos();
            break;

        case "4":
            Console.WriteLine("Encerrar");
            exibirMenu = false;
            break;

        default:
            Console.WriteLine("Opção inválida");
            break;
    }

    Console.WriteLine("Aperte qualquer tecla para continuar");
    Console.ReadLine();
}

Console.WriteLine("O programa foi encerrado");




