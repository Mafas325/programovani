using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace ZmenyPocasi
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }

        public static string VyresProblem(int[] data)
        {
            int vysledek_potencionalni = 0;
            int vysledek = 0;
            bool poprve = true;
            int prvni_cislo = 0;
            for (int i = 0; i < data.Length; i++)
            {
                
                if (poprve)
                {
                    prvni_cislo = data[i];
                    poprve = false;
                }

                else
                {
                    if (prvni_cislo > data[i])
                    {
                    vysledek_potencionalni = prvni_cislo-data[i];
                    }
                    else vysledek_potencionalni = data[i] - prvni_cislo;

                    prvni_cislo = data[i];
                    if (vysledek_potencionalni>vysledek)vysledek = vysledek_potencionalni;
                }
            }


            return vysledek.ToString();
        }
    }
}
