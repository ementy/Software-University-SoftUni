using System;
using System.Net;

namespace P01_UrlDecode
{
    public class Startup
    {
        public static void Main()
        {
            string input = Console.ReadLine();
            Console.WriteLine(WebUtility.UrlDecode(input));
        }
    }
}
