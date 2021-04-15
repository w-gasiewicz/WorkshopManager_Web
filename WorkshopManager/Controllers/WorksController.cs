using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using WorkshopManager.Models;

namespace WorkshopManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WorksController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;

        public WorksController(ILogger<UsersController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Works> Get()
        {
            using (var context = new WorkshopManager_DBContext())
            {
                return context.TblWorks.ToList();
            }
        }
    }
}
