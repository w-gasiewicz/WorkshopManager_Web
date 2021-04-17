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
    public class RolesController : ControllerBase
    {
        private readonly WorkshopManager_DBContext _context;

        public RolesController(WorkshopManager_DBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<TblRole> Get()
        {
            return _context.TblRoles.ToList();
        }
    }
}
