using System;
using System.Collections.Generic;

#nullable disable

namespace WorkshopManager_API.Models
{
    public partial class TblWork
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int VehicleId { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public decimal? NumberOfWorkHours { get; set; }

        public virtual TblUser User { get; set; }
        public virtual TblVehicle Vehicle { get; set; }
    }
}
