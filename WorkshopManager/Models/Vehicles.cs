using System;
using System.Collections.Generic;

#nullable disable

namespace WorkshopManager.Models
{
    public partial class Vehicles
    {
        public Vehicles()
        {
            TblWorks = new HashSet<Works>();
        }

        public int Id { get; set; }
        public string VinNumber { get; set; }
        public DateTime YearOfProduction { get; set; }
        public string PlateNumber { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }

        public virtual ICollection<Works> TblWorks { get; set; }
    }
}
