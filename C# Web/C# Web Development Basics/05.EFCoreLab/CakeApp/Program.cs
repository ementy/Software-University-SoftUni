using CakeApp.Controllers;
using SIS.WebServer;
using SIS.WebServer.Routing;

namespace CakeApp
{
    class Program
    {
        static void Main(string[] args)
        {
            ServerRoutingTable serverRoutingTable = new ServerRoutingTable();
            serverRoutingTable.Routes[SIS.HTTP.Enums.HttpRequestMethod.Get]["/"] = request => new HomeController().Index();
            serverRoutingTable.Routes[SIS.HTTP.Enums.HttpRequestMethod.Get]["/register"] = request => new AccountController().Register(request);
            serverRoutingTable.Routes[SIS.HTTP.Enums.HttpRequestMethod.Get]["/login"] = request => new AccountController().Login(request);
            serverRoutingTable.Routes[SIS.HTTP.Enums.HttpRequestMethod.Post]["/register"] = request => new AccountController().DoRegister(request);

            Server server = new Server(80, serverRoutingTable);

            server.Run();
        }
    }
}
