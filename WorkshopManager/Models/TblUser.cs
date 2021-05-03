using System;
using System.Collections.Generic;

#nullable disable

namespace WorkshopManager_API.Models
{
    public partial class TblUser
    {
        public TblUser()
        {
            TblRefreshTokens = new HashSet<TblRefreshToken>();
            TblWorks = new HashSet<TblWork>();
        }

        public int Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int RoleId { get; set; }

        public virtual TblRole Role { get; set; }
        public virtual ICollection<TblRefreshToken> TblRefreshTokens { get; set; }
        public virtual ICollection<TblWork> TblWorks { get; set; }
    }
}
