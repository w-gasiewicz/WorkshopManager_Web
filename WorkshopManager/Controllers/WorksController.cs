using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkshopManager_API.Models;

namespace WorkshopManager_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WorksController : ControllerBase
    {
        private readonly WorkshopManager_DBContext _context;

        public WorksController(WorkshopManager_DBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblWork>>> GetWokrs()
        {
            return await _context.TblWorks.ToListAsync();
        }

        [HttpGet("GetOngoingWorks")]
        public async Task<ActionResult<IEnumerable<TblWork>>> GetOngoingWokrs()
        {
            return await _context.TblWorks.Where(w => w.StartDate != null && w.EndDate == null).ToListAsync();
        }

        [HttpGet("GetEndedWorks")]
        public async Task<ActionResult<IEnumerable<TblWork>>> GetFinishedWokrs()
        {
            return await _context.TblWorks.Where(w => w.EndDate != null).ToListAsync();
        }

        [HttpGet("GetWorksForVehicle/{vehicleId}")]
        public async Task<ActionResult<IEnumerable<TblWork>>> GetWokrsForVehicle(int carId)
        {
            return await _context.TblWorks.Where(w => w.VehicleId == carId).ToListAsync();
        }

        [HttpGet("GetWorksForUser/{userId}")]
        public async Task<ActionResult<IEnumerable<TblWork>>> GetWokrsForUsers(int userId)
        {
            return await _context.TblWorks.Where(w => w.UserId == userId).ToListAsync();
        }

        // POST api/<WorksController>
        [HttpPost]
        public void Post([FromBody] string value)
        {

        }

        // PUT api/<WorksController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }

        // DELETE api/<WorksController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
