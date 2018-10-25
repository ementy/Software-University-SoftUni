using System;

namespace SIS.HTTP.Extensions
{
    public static class StringExtensions
    {
        public static string Capitalize(this String str)
        {
            string result;

            if (string.IsNullOrEmpty(str))
            {
                result = string.Empty;
            }
            else
            {
                result = char.ToUpper(str[0]) + str.Substring(1).ToLower();
            }

            return result;
        }
    }
}
