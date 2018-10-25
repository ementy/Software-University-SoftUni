﻿using SIS.WebServer;
using SIS.WebServer.Routing;

namespace SIS.Demo
{
    public class Launcher
    {
        static void Main(string[] args)
        {
            ServerRoutingTable serverRoutingTable = new ServerRoutingTable();
            serverRoutingTable.Routes[HTTP.Enums.HttpRequestMethod.Get]["/"] = request => new HomeController().Index();

            Server server = new Server(8000, serverRoutingTable);

            server.Run();
        }
    }
}
