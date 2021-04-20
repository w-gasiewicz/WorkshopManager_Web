using System;
using System.Collections.Generic;

#nullable disable

namespace WorkshopManager_API.Models
{
    public partial class TblRole
    {
        public TblRole()
        {
            TblUsers = new HashSet<TblUser>();
        }

        public int Id { get; set; }
        public string RoleName { get; set; }

        public virtual ICollection<TblUser> TblUsers { get; set; }
    }
}
