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
    public class RolesController : ControllerBase
    {
        private readonly WorkshopManager_DBContext _context;

        public RolesController(WorkshopManager_DBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblRole>>> GetRoles()
        {
            return await _context.TblRoles.ToListAsync();
        }

        [HttpGet("GetRole/{roleName}")]
        public async Task<ActionResult<TblRole>> GetRole(string roleName)
        {
            var role = await _context.TblRoles.Where(r => r.RoleName == roleName).FirstOrDefaultAsync();
            return role == null ? NotFound() : role;
        }

        // POST api/<RolesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {

        }

        // PUT api/<RolesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }

        // DELETE api/<RolesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
