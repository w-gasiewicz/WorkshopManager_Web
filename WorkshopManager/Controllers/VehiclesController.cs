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
    [Route("api/[controller]")]
    public class VehiclesController : ControllerBase
    {
        private readonly WorkshopManager_DBContext _context;

        public VehiclesController(WorkshopManager_DBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<TblVehicle> Get()
        {
            return _context.TblVehicles.ToList();
        }
    }
}
