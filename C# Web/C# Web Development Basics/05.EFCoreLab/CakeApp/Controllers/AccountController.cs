using CakeApp.Data;
using SIS.HTTP.Requests;
using SIS.HTTP.Responses;
using SIS.WebServer.Results;

namespace CakeApp.Controllers
{
    public class AccountController : BaseController
    {
        private CakesDbContext db;

        public AccountController()
        {
            this.db = new CakesDbContext();
        }

        public IHttpResponse Register(IHttpRequest request)
        {
            return this.View("Register");
        }

        public IHttpResponse DoRegister(IHttpRequest request)
        {
            var userName = request.FormData["username"].ToString().Trim();
            var password = request.FormData["password"];
            var confirmPassword = request.FormData["confirmPassword"];

            if (string.IsNullOrWhiteSpace(userName) || userName.Length < 4)
            {
                return this.BadReqestError("Please provide valid username.");
            }



            //1. Validate 
            //2. Generate password hash
            //3. Create user
            //4. Redirect to home page
            return new HtmlResult("Registered", SIS.HTTP.Enums.HttpResponseStatusCode.Ok);
        }

        public IHttpResponse Login(IHttpRequest request)
        {
            return this.View("Login");
        } 

        protected IHttpResponse BadReqestError(string errorMessage)
        {
            return new HtmlResult($"<h1>{errorMessage}</h1>", SIS.HTTP.Enums.HttpResponseStatusCode.BadRequest);
        }
    }
}
