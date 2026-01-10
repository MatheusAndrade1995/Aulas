using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelariaMda.Models
{
    public class Suite
    {   
        public Suite(string tipoSuite, int capacidade, decimal valorDiaria)
        {
            ValorDiaria = valorDiaria ;
            Capacidade = capacidade;
            TipoSuite = tipoSuite ;
        }
        

        public string TipoSuite { get; set; }
        public int Capacidade { get; set; }
        public decimal ValorDiaria { get; set; }
    }
}