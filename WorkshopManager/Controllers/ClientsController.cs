using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkshopManager_API.Models;

namespace WorkshopManager_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly WorkshopManager_DBContext _context;
        public ClientsController(WorkshopManager_DBContext context)
        {
            _context = context;
        }
        // GET: api/<ClientsController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblClient>>> GetClients()
        {
            return await _context.TblClients.ToListAsync();
        }

        // GET api/<ClientsController>/5
        [HttpGet("GetClient/{id}")]
        public async Task<ActionResult<TblClient>>GetClient(int id)
        {
            var client = await _context.TblClients.Where(c => c.Id == id).FirstOrDefaultAsync();
            return client == null ? NotFound() : client;
        }

        // POST api/<ClientsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {

        }

        // PUT api/<ClientsController>/5
        [HttpPut("UpdateClient/{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }

        // DELETE api/<ClientsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
