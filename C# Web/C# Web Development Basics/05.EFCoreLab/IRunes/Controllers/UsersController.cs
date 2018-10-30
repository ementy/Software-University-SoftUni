using IRunes.Controllers;
using Services;
using SIS.HTTP.Cookies;
using SIS.HTTP.Requests;
using SIS.HTTP.Responses;
using SIS.WebServer.Results;
using System.Linq;

namespace IRunesApp.Controllers
{
    public class UsersController : BaseController
    {
        public IHttpResponse Login(IHttpRequest request)
        {
            return this.View();
        }

        public IHttpResponse PostLogin(IHttpRequest request)
        {
            var username = request.FormData["username"].ToString();
            var password = request.FormData["password"].ToString();

            var hashService = new HashService();
            var cookieService = new UserCookieService();

            var hashedPassword = hashService.Hash(password);

            var user = this.Context.Users.FirstOrDefault(u => u.Username == username && u.HashedPassword == hashedPassword);

            if (user == null)
            {
                return new RedirectResult("/login");
            }

            request.Session.AddParameter("username", username);
            var userCookieValue = cookieService.GetUserCookie(username);

            request.Cookies.Add(new HttpCookie("IRunes_auth", userCookieValue));
            return new RedirectResult("home/index");
        }

        public IHttpResponse Register(IHttpRequest request)
        {
            return this.View();
        }
    }
}
