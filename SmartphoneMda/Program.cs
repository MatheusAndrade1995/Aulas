using SmartphoneMda.Models;

Console.WriteLine("Smartphone Nokia");
Smartphone nokia = new Nokia("123456", "AUIJ8535", "16541354684", 128);
nokia.Ligar();
nokia.ReceberLigacao();
nokia.InstalarAplicativo("Whatsapp");


Console.WriteLine("/n");

Console.WriteLine("Smartphone Iphone");
Smartphone iphone16 = new Iphone("123789", "AAARE8535", "16541355547", 128);
iphone16.Ligar();
iphone16.ReceberLigacao();
iphone16.InstalarAplicativo("CandyCrush");