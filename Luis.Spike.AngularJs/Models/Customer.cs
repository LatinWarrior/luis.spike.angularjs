using System;
using System.ComponentModel.DataAnnotations;

namespace Luis.Spike.AngularJs.Models
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        public string MiddleName { get; set; }

        public string Email { get; set; }
    }
}