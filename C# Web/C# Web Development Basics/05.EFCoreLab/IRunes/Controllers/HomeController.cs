using SIS.HTTP.Requests;
using SIS.HTTP.Responses;

namespace IRunes.Controllers
{
    public class HomeController : BaseController
    {
        public IHttpResponse Index()
        {
            return this.View();
        }
    }
}
