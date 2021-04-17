using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using WorkshopManager.Models;

namespace WorkshopManager.Controllers
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
        public IEnumerable<TblWork> Get()
        {
            return _context.TblWorks.ToList();
        }
    }
}
