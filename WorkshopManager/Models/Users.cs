using System;
using System.Collections.Generic;

#nullable disable

namespace WorkshopManager.Models
{
    public partial class Users
    {
        public Users()
        {
            TblWorks = new HashSet<Works>();
        }

        public int Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int RoleId { get; set; }

        public virtual Roles Role { get; set; }
        public virtual ICollection<Works> TblWorks { get; set; }
    }
}
