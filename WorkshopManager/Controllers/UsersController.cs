using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using WorkshopManager.Models;

namespace WorkshopManager.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly WorkshopManager_DBContext _context;

        public UsersController(WorkshopManager_DBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<TblUser> Get()
        {
            return _context.TblUsers.ToList();
        }
    }
}
