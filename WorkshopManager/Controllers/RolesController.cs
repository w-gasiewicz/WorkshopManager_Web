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
            var role = await _context.TblRoles.Where(u => u.RoleName == roleName).FirstOrDefaultAsync();
            return role == null ? NotFound() : role;
        }
    }
}
