using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkshopManager.Models;

namespace WorkshopManager.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly WorkshopManager_DBContext _context;

        public UsersController(WorkshopManager_DBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblUser>>> GetUsers()
        {
            return await _context.TblUsers.ToListAsync();
        }

        [HttpGet("GetUser/{id}")]
        public async Task<ActionResult<TblUser>> GetUser(int id)
        {
            var user = await _context.TblUsers.Where(u => u.Id == id).FirstOrDefaultAsync();
            return user == null ? NotFound() : user;
        }
    }
}
