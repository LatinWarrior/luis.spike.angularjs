using System.Data.Entity;

namespace Luis.Spike.AngularJs.Models
{
    public class DemoContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }

        public DemoContext()
            : base("DemoContext")
        {
        }
    }
}