using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkshopManager_API.Models;

namespace WorkshopManager_API.Controllers
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
            var vahicle = await _context.TblVehicles.Where(v => v.Id == id).FirstOrDefaultAsync();
            return vahicle == null ? NotFound() : vahicle;
        }

        // POST api/<VehiclesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {

        }

        // PUT api/<VehiclesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }

        // DELETE api/<VehiclesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
