using System.Data.Entity;
using System.Data.Entity.Migrations;
using FizzWare.NBuilder;

namespace Luis.Spike.AngularJs.Models
{
    public class DemoInitializer : DropCreateDatabaseIfModelChanges<DemoContext>
    {
        public void RunSeed(DemoContext context)
        {
            CreateCustomers(context);
        }

        protected override void Seed(DemoContext context)
        {
            CreateCustomers(context);
        }

        private static void CreateCustomers(DemoContext context)
        {
            var customers = Builder<Customer>
                .CreateListOfSize(2000)
                .All()
                .With(c => c.FirstName = Faker.Name.First())
                .With(c => c.LastName = Faker.Name.Last())
                .With(c => c.MiddleName = Faker.Name.First())
                .With(c => c.Email = Faker.Internet.FreeEmail())
                .Build();

            foreach (var customer in customers)
            {
                context.Customers.AddOrUpdate(c => c.Id,
                    customer);                
            }

            context.SaveChanges();
        }
    }
}