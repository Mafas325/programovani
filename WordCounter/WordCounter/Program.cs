using System.Security.Cryptography;

namespace WordCounterNS
{
    public class WordCounter
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            WordCounter counter = new WordCounter();
            Console.WriteLine("Input text:");
            string? text = Console.ReadLine();
            if (text == null)
            {
                Console.WriteLine("Error: No text given");
                return;
            }
            int count = counter.CountWords(text);
            Console.WriteLine($"The text has {count} words.");
        }

        bool isLetter(char c) {
            return char.IsLetterOrDigit(c) || c is '\'';
        }

        public int CountWords(string text)
        {
            int slova = 0;
            bool cekam_na_slovo = true;
            for (int i = 0; i < text.Length; i++)
            {
                if (isLetter(text[i]))
                {
                    if (cekam_na_slovo)
                    {
                        slova++;
                        cekam_na_slovo = false;
                    }
                }
                else if (isLetter(text[i]) == false)
                {
                    cekam_na_slovo = true;
                }
            }
            //if (char.IsLetter('5'))


            return slova;
        }
    }
}