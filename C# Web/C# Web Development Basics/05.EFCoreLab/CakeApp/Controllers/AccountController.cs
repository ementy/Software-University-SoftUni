using SIS.HTTP.Requests;
using SIS.HTTP.Responses;
using SIS.WebServer.Results;
using System;
using System.Collections.Generic;
using System.Text;

namespace CakeApp.Controllers
{
    public class AccountController : BaseController
    {
        public IHttpResponse Register(IHttpRequest request)
        {
            return this.View("Register");
        }

        public IHttpResponse DoRegister(IHttpRequest request)
        {
            return new HtmlResult("Registered", SIS.HTTP.Enums.HttpResponseStatusCode.Ok);
        }

        public IHttpResponse Login(IHttpRequest request)
        {
            return this.View("Login");
        } 
    }
}
