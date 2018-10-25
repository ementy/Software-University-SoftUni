using System;
using System.Collections.Generic;
using System.Linq;

namespace SIS.HTTP.Headers
{
    public class HttpHeaderCollection : IHttpHeaderCollection
    {
        private readonly Dictionary<string, HttpHeader> headers;

        public HttpHeaderCollection()
        {
            this.headers = new Dictionary<string, HttpHeader>();
        }

        public void Add(HttpHeader header)
        {
            headers.Add(header.Key, header);
        }

        public bool ContainsHeader(string key)
        {
            var result = this.headers.ContainsKey(key);

            return result;
        }

        public HttpHeader GetHeader(string key)
        {
            bool foundHeader = this.headers.TryGetValue(key, out HttpHeader header);

            if (!foundHeader)
            {
                return null;
            }

            return header;
        }

        public override string ToString()
        {
            return string.Join(Environment.NewLine, headers);
        }
    }
}
