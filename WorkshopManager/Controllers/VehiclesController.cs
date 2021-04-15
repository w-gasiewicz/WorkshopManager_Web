using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkshopManager.Models;

namespace WorkshopManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VehiclesController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;

        public VehiclesController(ILogger<UsersController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Vehicles> Get()
        {
            using (var context = new WorkshopManager_DBContext())
            {
                return context.TblVehicles.ToList();
            }
        }
    }
}
