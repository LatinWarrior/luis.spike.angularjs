using System.Web.Http;
using Newtonsoft.Json.Serialization;

namespace Luis.Spike.AngularJs
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Configue JSON formatter.
            var jsonFormatter = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            
        }
    }
}
