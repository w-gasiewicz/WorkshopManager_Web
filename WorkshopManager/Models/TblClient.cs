using System;
using System.Collections.Generic;

#nullable disable

namespace WorkshopManager.Models
{
    public partial class TblClient
    {
        public TblClient()
        {
            TblVehicles = new HashSet<TblVehicle>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string CompanyName { get; set; }
        public string Nip { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string PostalCode { get; set; }

        public virtual ICollection<TblVehicle> TblVehicles { get; set; }
    }
}
