using IRunes.Controllers;
using IRunesApp.Controllers;
using SIS.WebServer;
using SIS.WebServer.Results;
using SIS.WebServer.Routing;

namespace IRunes
{
    public class Program
    {
        static void Main(string[] args)
        {
            ServerRoutingTable serverRoutingTable = new ServerRoutingTable();
            //(route=”/Home/Index”, route=”/”)
            serverRoutingTable.Routes[SIS.HTTP.Enums.HttpRequestMethod.Get]["/home/index"] = request => new RedirectResult("/");
            serverRoutingTable.Routes[SIS.HTTP.Enums.HttpRequestMethod.Get]["/"] = request => new HomeController().Index();

            //(route=”/Users/Login”)
            serverRoutingTable.Routes[SIS.HTTP.Enums.HttpRequestMethod.Get]["/users/login"] = request => new UsersController().Login(request);

            serverRoutingTable.Routes[SIS.HTTP.Enums.HttpRequestMethod.Post]["/users/login"] = request => new UsersController().PostLogin(request);


            //(route=”/Users/Register”)
            serverRoutingTable.Routes[SIS.HTTP.Enums.HttpRequestMethod.Get]["/users/register"] = request => new UsersController().Register(request);


            //(route=”/Albums/All”)
            // (route =”/ Albums / Create”)
            //(route=”/Albums/Details?id={albumId}”)
            //(route=”/Tracks/Create?albumId={albumId}”)
            //(route=”/Tracks/Details?albumId={albumId}&trackId={trackId}”)


            Server server = new Server(80, serverRoutingTable);

            server.Run();
        }
    }
}
