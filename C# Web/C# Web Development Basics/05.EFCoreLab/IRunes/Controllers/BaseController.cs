using IRunes.Data;
using SIS.HTTP.Enums;
using SIS.HTTP.Responses;
using SIS.WebServer.Results;
using System.IO;
using System.Runtime.CompilerServices;

namespace IRunes.Controllers
{
    public abstract class BaseController
    {
        private const string RootDirectoryRelativePath = "../../../";

        private const string ViewsFolderName = "Views";

        private const string ControllerDefaultName = "Controller";

        private const string HtmlFileExtension = ".html";

        private const string DirectorySeparator = "/";

        protected IRunesDbContext Context { get; set; }

        public BaseController()
        {
            this.Context = new IRunesDbContext();
        }

        private string GetCurrentControllerName() => this.GetType().Name.Replace(ControllerDefaultName, string.Empty); 

        protected IHttpResponse View([CallerMemberName] string viewName = "")
        {

            string filePath = RootDirectoryRelativePath 
                + ViewsFolderName + DirectorySeparator
                + this.GetCurrentControllerName() + DirectorySeparator
                + viewName + HtmlFileExtension;

            if (!File.Exists(filePath))
            {
                return new BadRequestResult($"View {viewName} not found.", HttpResponseStatusCode.NotFound);
            }

            var fileContent = File.ReadAllText(filePath);
            return new HtmlResult(fileContent, HttpResponseStatusCode.Ok);
        }
    }
}
