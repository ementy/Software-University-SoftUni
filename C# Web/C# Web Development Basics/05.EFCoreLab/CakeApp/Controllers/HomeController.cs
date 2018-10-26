using CakeApp.Controllers;
using SIS.HTTP.Responses;

namespace CakeApp
{
    public class HomeController : BaseController
    {
        public IHttpResponse Index()
        {
            return this.View("Index");
        }
    }
}
