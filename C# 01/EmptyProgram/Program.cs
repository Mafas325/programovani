namespace EmptyProgram
{
    class Program
    {

        static Dictionary<string, int> dict = new() {
            { "kámen", 0 },
            { "nůžky", 2 },
            { "papír", 1 }
        };

        static void Main(string[] args)
        {
            Console.InputEncoding = Console.OutputEncoding;
            Console.WriteLine("co si zahrát kámen nůšky papír");
            Console.WriteLine("napiš ano jestli chceš hrát a ne jestli ne");
            string ano_ne = Console.ReadLine();
            if (ano_ne == "ano")
            {
                while (Hra()) { }
            }
            else
            {
                Console.WriteLine("no tak asi ne");
            }
        }

        static bool Hra()
        {
            bool ještě;
            Console.WriteLine("napiš kámen nůžky nebo papír");
            string tvoje_volba = Console.ReadLine();
            if (tvoje_volba == "kámen" || tvoje_volba == "nůžky" || tvoje_volba == "papír")
            {
                int jeho_kód = Random.Shared.Next(0, 3);
                int můj_kód = dict[tvoje_volba];


                if ((můj_kód + 1) % 3 == jeho_kód)
                {
                    Console.WriteLine("Dal jsem " + jeho_kód + ", takže jsi prohrál");
                    Console.WriteLine("Dáme ještě jednu?");
                    Console.WriteLine("napiš ano jestli chceš hrát a ne jestli ne");
                    string něco = Console.ReadLine();
                    if (něco == "ano")
                    {
                        ještě = true;
                    }
                    else
                    {
                        Console.WriteLine("no, tak né no");
                        ještě = false;
                    }
                }
                else if (můj_kód == jeho_kód)
                {
                    Console.WriteLine("dal jsem " + jeho_kód + ", takže remíza, chci ještě jednou");
                    ještě = true;
                }
                else
                {
                    Console.WriteLine("dal jsem " + jeho_kód + ", takže jsi vyhrál, gratuluji! ☺ ");
                    Console.WriteLine("Dáme ještě jednu?");
                    Console.WriteLine("napiš ano jestli chceš hrát a ne jestli ne");
                    string něco = Console.ReadLine();
                    if (něco == "ano")
                    {
                        ještě = true;
                    }
                    else
                    {
                        Console.WriteLine("no, tak né no");
                        ještě = false;
                    }
                }

            }
            else
            {
                Console.WriteLine("tak proč si řekl že chceš hrát?");
                ještě = false;
            }
            return ještě;
        }
    }
}