using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using WorkshopManager.Models;

namespace WorkshopManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;

        public UsersController(ILogger<UsersController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Users> Get()
        {
            using (var context = new WorkshopManager_DBContext())
            {
                return context.TblUsers.ToList();
            }
        }
    }
}
