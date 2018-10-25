﻿using SIS.HTTP.Responses;
using SIS.WebServer.Results;
using System;

namespace SIS.Demo
{
    public class HomeController
    {
        public IHttpResponse Index()
        {
            string content = "<h1>Hello, World!</h1>";

            return new HtmlResult(content, HTTP.Enums.HttpResponseStatusCode.Ok);
        }
    }
}
