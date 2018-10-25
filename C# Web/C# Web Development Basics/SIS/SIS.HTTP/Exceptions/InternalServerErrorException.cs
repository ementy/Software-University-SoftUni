namespace SIS.HTTP.Exceptions
{
    using System;
    using System.Runtime.Serialization;

    public class InternalServerErrorException : Exception
    {
        private const string ErrorMessage = "The Server has encountered an error.";

        public InternalServerErrorException() : base (ErrorMessage)
        {
        }

        //public InternalServerErrorException(string message) : base(message)
        //{
        //}
    }
}
