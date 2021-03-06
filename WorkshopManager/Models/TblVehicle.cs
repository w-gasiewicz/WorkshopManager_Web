using System;
using System.Collections.Generic;

#nullable disable

namespace WorkshopManager_API.Models
{
    public partial class TblVehicle
    {
        public TblVehicle()
        {
            TblWorks = new HashSet<TblWork>();
        }

        public int Id { get; set; }
        public string VinNumber { get; set; }
        public DateTime YearOfProduction { get; set; }
        public string PlateNumber { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int ClientId { get; set; }

        public virtual TblClient Client { get; set; }
        public virtual ICollection<TblWork> TblWorks { get; set; }
    }
}
