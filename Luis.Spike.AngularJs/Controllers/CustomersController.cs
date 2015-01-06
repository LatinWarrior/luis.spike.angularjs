using System.Collections.Generic;
using System.Web.Http;
using Luis.Spike.AngularJs.Models;

namespace Luis.Spike.AngularJs.Controllers
{
    public class CustomersController : ApiController
    {
        private readonly DemoContext _demoContext;

        public CustomersController()
        {
            _demoContext = new DemoContext();
        }

        // GET api/<controller>
        public IEnumerable<Customer> Get()
        {            
            //var demoContext = new DemoContext();

            //var demoInitializer = new DemoInitializer();

            //demoInitializer.RunSeed(demoContext);

            return _demoContext.Customers;
        }
    }
}
