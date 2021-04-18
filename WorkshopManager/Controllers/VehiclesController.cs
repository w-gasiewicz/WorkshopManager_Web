using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public async Task<ActionResult<IEnumerable<TblVehicle>>> GetVehicles()
        {
            return await _context.TblVehicles.ToListAsync();
        }

        [HttpGet("GetVehicle/{id}")]
        public async Task<ActionResult<TblVehicle>> GetVehicle(int id)
        {
            var vahicle = await _context.TblVehicles.Where(u => u.Id == id).FirstOrDefaultAsync();
            return vahicle == null ? NotFound() : vahicle;
        }
    }
}
