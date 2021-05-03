using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkshopManager_API.Models
{
    public class UserWithToken : TblUser
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }

        public UserWithToken(TblUser user)
        {
            this.Id = user.Id;
            this.Login = user.Login;
            this.Password = user.Password;
            this.Name = user.Name;
            this.Surname = user.Surname;

            this.Role = user.Role;
        }
    }
}
