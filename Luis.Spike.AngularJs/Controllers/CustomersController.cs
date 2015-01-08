using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Http.Description;
using Luis.Spike.AngularJs.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Luis.Spike.AngularJs.Controllers
{
    public class CustomersController : ApiController
    {
        private readonly DemoContext _demoContext;        

        public CustomersController()
        {
            _demoContext = new DemoContext();
        }

        //[ResponseType(typeof(List<Customer>))]
        //public IHttpActionResult GetCustomers()
        //{
        //    var jsonSerializerSettings = new JsonSerializerSettings
        //    {
        //        ContractResolver = new CamelCasePropertyNamesContractResolver()
                
        //    };

        //    var data = _demoContext.Customers.ToList();

        //    var jsonResult = JsonConvert.SerializeObject(data, Formatting.None, jsonSerializerSettings);            

        //    return Ok(jsonResult);            
        //}

        [ResponseType(typeof(Customer[]))]
        public IHttpActionResult GetCustomers()
        {
            var jsonSerializerSettings = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()

            };

            var data = _demoContext.Customers.ToArray();

            var jsonResult = JsonConvert.SerializeObject(data, Formatting.None, jsonSerializerSettings);

            return Ok(jsonResult);
        }

        // GET: api/Customers1/5
        [ResponseType(typeof(Customer))]
        public IHttpActionResult GetCustomer(int id)
        {
            Customer customer = _demoContext.Customers.Find(id);
            if (customer == null)
            {
                return NotFound();
            }

            return Ok(customer);
        }

        // PUT: api/Customers1/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCustomer(int id, Customer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != customer.Id)
            {
                return BadRequest();
            }

            _demoContext.Entry(customer).State = EntityState.Modified;

            try
            {
                _demoContext.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Customers1
        [ResponseType(typeof(Customer))]
        public IHttpActionResult PostCustomer(Customer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _demoContext.Customers.Add(customer);
            _demoContext.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = customer.Id }, customer);
        }

        // DELETE: api/Customers1/5
        [ResponseType(typeof(Customer))]
        public IHttpActionResult DeleteCustomer(int id)
        {
            Customer customer = _demoContext.Customers.Find(id);
            if (customer == null)
            {
                return NotFound();
            }

            _demoContext.Customers.Remove(customer);
            _demoContext.SaveChanges();

            return Ok(customer);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _demoContext.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CustomerExists(int id)
        {
            return _demoContext.Customers.Count(e => e.Id == id) > 0;
        }
    }
}
