using System;
using System.Collections.Generic;

#nullable disable

namespace WorkshopManager.Models
{
    public partial class Roles
    {
        public Roles()
        {
            TblUsers = new HashSet<Users>();
        }

        public int Id { get; set; }
        public string RoleName { get; set; }

        public virtual ICollection<Users> TblUsers { get; set; }
    }
}
