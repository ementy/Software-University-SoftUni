using SIS.HTTP.Enums;
using SIS.HTTP.Responses;
using SIS.WebServer.Results;
using System.IO;

namespace CakeApp.Controllers
{
    public abstract class BaseController
    {
        protected IHttpResponse View(string viewName)
        {
            //or cshtml
            var content = File.ReadAllText("Views/" + viewName + ".html");
            return new HtmlResult(content, HttpResponseStatusCode.Ok);
        }
    }
}
