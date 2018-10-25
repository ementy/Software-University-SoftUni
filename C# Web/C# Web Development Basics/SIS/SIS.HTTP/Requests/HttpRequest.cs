using System;
using System.Collections.Generic;
using System.Linq;
using SIS.HTTP.Common;
using SIS.HTTP.Enums;
using SIS.HTTP.Exceptions;
using SIS.HTTP.Extensions;
using SIS.HTTP.Headers;

namespace SIS.HTTP.Requests
{
    public class HttpRequest : IHttpRequest
    {
        private const char HttpRequestUrlQuerySeparator = '?';

        private const char HttpRequestUrlFragmentSeparator = '#';

        private const string HttpRequestHeaderNameValueSeparator = ": ";

        private const char HttpRequestParameterSeparator = '&';

        private const char HttpRequestParameterNameValueSeparator = '=';

        public HttpRequest(string requestString)
        {
            this.FormData = new Dictionary<string, object>();
            this.QueryData = new Dictionary<string, object>();
            this.Headers = new HttpHeaderCollection();

            this.ParseRequest(requestString);
        }

        public string Path { get; private set; }

        public string Url { get; private set; }

        public Dictionary<string, object> FormData { get; }

        public Dictionary<string, object> QueryData { get; }

        public IHttpHeaderCollection Headers { get; }

        public HttpRequestMethod RequestMethod { get; private set; }

        private bool IsValidRequestLine(string[] requestLine)
        {
            // or .ToLower()???
            bool result = requestLine.Length == 3 && requestLine[2].ToUpper() == GlobalConstants.HttpOneProtocolFragment;

            return result;
        }

        private bool IsValidRequestQueryString(string queryString, string[] queryParameters)
        {
            bool queryStringCheck = !string.IsNullOrEmpty(queryString);
            bool queryParametersCheck = queryParameters.Length < 1;

            // or ||???
            return queryStringCheck && queryParametersCheck;
        }

        private void ParseRequestMethod(string[] requestLine)
        {
            // .Capitalize the methodString - the enums for httprequestmethods start with capital letter
            string methodString = requestLine[0];
            bool isParsed = Enum.TryParse<HttpRequestMethod>(methodString.Capitalize(), out HttpRequestMethod parsedMethod);

            if (!isParsed)
            {
                throw new BadRequestException();
            }

            this.RequestMethod = parsedMethod;
        }

        private void ParseRequestUrl(string[] requestLine)
        {
            this.Url = requestLine[1];
        }

        private void ParseRequestPath()
        {
            string[] splitedUrl = this.Url.Split(new[] { HttpRequestUrlQuerySeparator, HttpRequestUrlFragmentSeparator }, StringSplitOptions.RemoveEmptyEntries);

            this.Path = splitedUrl[0];
        }

        private void ParseHeaders(string[] requestContent)
        {
            foreach (var requestString in requestContent)
            {
                if (!string.IsNullOrEmpty(requestString))
                {
                    string[] splittedRequestString = requestString.Split(new[] { HttpRequestHeaderNameValueSeparator }, StringSplitOptions.RemoveEmptyEntries);
                    this.Headers.Add(new HttpHeader(splittedRequestString[0], splittedRequestString[1]));
                }
            }

            if (!this.Headers.ContainsHeader(GlobalConstants.HostHeaderKey))
            {
                throw new BadRequestException();
            }
        }

        private void ParseQueryParameters()
        {
            //Extracts the Query string, by splitting the Request’s Url and taking only the query from it.Then splits the Query string into different parameters, 
            //and maps each of them into the Query Data Dictionary.
            //Validates the Query string and parameters by calling the IsValidrequestQueryString() method.
            //Does nothing if the Request’s Url contains NO Query string.
            //Throws a BadRequestException if the Query string is invalid.

            if (!this.Url.Contains('?'))
            {
                return;
            }

            string[] splitedUrl = this.Url.Split(new[] { HttpRequestUrlQuerySeparator, HttpRequestUrlFragmentSeparator }, StringSplitOptions.RemoveEmptyEntries);

            string queryString = splitedUrl[1];

            if (string.IsNullOrEmpty(queryString))
            {
                return;
            }

            string[] queryParameters = queryString.Split(new[] { HttpRequestParameterSeparator }, StringSplitOptions.RemoveEmptyEntries);

            if (!IsValidRequestQueryString(queryString, queryParameters))
            {
                throw new BadRequestException();
            }

            foreach (var parameter in queryParameters)
            {
                string[] parameterArguments = parameter.Split(new[] { HttpRequestParameterNameValueSeparator }, StringSplitOptions.RemoveEmptyEntries);
                this.QueryData.Add(parameterArguments[0], parameterArguments[1]);
            }
        }

        private void ParseFormDataParameters(string formData)
        {
            //Splits the Request’s Body into different parameters, and maps each of them into the Form Data Dictionary.
            //Does nothing if the Request contains NO Body.

            if (string.IsNullOrEmpty(formData))
            {
                return;
            }

            string[] formDataParams = formData.Split(new[] { HttpRequestParameterSeparator }, StringSplitOptions.RemoveEmptyEntries);

            foreach (var parameter in formDataParams)
            {
                string[] parameterArguments = parameter.Split(HttpRequestParameterNameValueSeparator, StringSplitOptions.RemoveEmptyEntries);
                this.FormData.Add(parameterArguments[0], parameterArguments[1]);
            }
        }

        private void ParseRequestParameters(string formData)
        {
            this.ParseQueryParameters();
            this.ParseFormDataParameters(formData);
        }

        private void ParseRequest(string requestString)
        {
            string[] splitRequestContent = requestString.Split(new[] { Environment.NewLine }, StringSplitOptions.None);

            string[] requestLine = splitRequestContent[0].Trim().Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);

            if (!this.IsValidRequestLine(requestLine))
            {
                throw new BadRequestException();
            }

            //add parse methods
            this.ParseRequestMethod(requestLine);
            this.ParseRequestUrl(requestLine);
            this.ParseRequestPath();

            this.ParseHeaders(splitRequestContent.Skip(1).ToArray());

            this.ParseRequestParameters(splitRequestContent[splitRequestContent.Length - 1]);
        }
    }
}
