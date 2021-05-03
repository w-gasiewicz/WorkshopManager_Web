using System;
using System.Collections.Generic;

#nullable disable

namespace WorkshopManager_API.Models
{
    public partial class TblRefreshToken
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Token { get; set; }
        public DateTime ExpiryDate { get; set; }

        public virtual TblUser User { get; set; }
    }
}
