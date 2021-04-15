using System;
using System.Collections.Generic;

#nullable disable

namespace WorkshopManager.Models
{
    public partial class Works
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int VehicleId { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public decimal? NumberOfWorkHours { get; set; }

        public virtual Users User { get; set; }
        public virtual Vehicles Vehicle { get; set; }
    }
}
