using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using WorkshopManager_API.Handlers;
using WorkshopManager_API.Models;

namespace WorkshopManager_API.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly WorkshopManager_DBContext _context;
        private readonly JWTSettings _jwtsettings;
        private readonly string _salt = "u!8sW%7(";
        private Crypto _crypto;
        public UsersController(WorkshopManager_DBContext context, IOptions<JWTSettings> jwtsettings)
        {
            _context = context;
            _jwtsettings = jwtsettings.Value;
            _crypto = new Crypto();
        }

        //[HttpPost("Login")]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Login(TblUser userModel)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return View(userModel);
        //    }

        //    var user = await _context.TblUsers.Where(u => u.Login == userModel.Login && u.Password == userModel.Password).FirstOrDefaultAsync();

        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    if (user != null &&
        //        await _userManager.CheckPasswordAsync(user, userModel.Password))
        //    {
        //        var identity = new ClaimsIdentity(IdentityConstants.ApplicationScheme);
        //        identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.Id));
        //        identity.AddClaim(new Claim(ClaimTypes.Name, user.UserName));

        //        await HttpContext.SignInAsync(IdentityConstants.ApplicationScheme,
        //            new ClaimsPrincipal(identity));

        //        return RedirectToAction(nameof(HomeController.Index), "Home");
        //    }
        //    else
        //    {
        //        ModelState.AddModelError("", "Invalid UserName or Password");
        //        return View();
        //    }
        //}

        // POST: api/Users
        [HttpPost("Login")]
        public async Task<ActionResult<UserWithToken>> Login([FromBody] TblUser user)
        {
            user = await _context.TblUsers.Include(u => u.Role)
                                        .Where(u => u.Login == user.Login
                                                && u.Password == user.Password).FirstOrDefaultAsync();

            UserWithToken userWithToken = null;

            if (user != null)
            {
                TblRefreshToken refreshToken = GenerateRefreshToken();
                user.TblRefreshTokens.Add(refreshToken);
                await _context.SaveChangesAsync();

                userWithToken = new UserWithToken(user);
                userWithToken.RefreshToken = refreshToken.Token;
            }

            if (userWithToken == null)
            {
                return NotFound();
            }

            //sign your token here here..
            userWithToken.AccessToken = GenerateAccessToken(user.Id);
            return userWithToken;
        }

        // POST: api/Users
        [HttpPost("RegisterUser")]
        public async Task<ActionResult<UserWithToken>> RegisterUser([FromBody] TblUser user)
        {
            user.Password = _crypto.GenerateSaltedHash(Encoding.ASCII.GetBytes(user.Password), Encoding.ASCII.GetBytes(_salt));
            _context.TblUsers.Add(user);
            await _context.SaveChangesAsync();

            //load role for registered user
            user = await _context.TblUsers.Include(u => u.Role)
                                        .Where(u => u.Id == user.Id).FirstOrDefaultAsync();

            UserWithToken userWithToken = null;

            if (user != null)
            {
                TblRefreshToken refreshToken = GenerateRefreshToken();
                user.TblRefreshTokens.Add(refreshToken);
                await _context.SaveChangesAsync();

                userWithToken = new UserWithToken(user);
                userWithToken.RefreshToken = refreshToken.Token;
            }

            if (userWithToken == null)
            {
                return NotFound();
            }

            //sign your token here here..
            userWithToken.AccessToken = GenerateAccessToken(user.Id);
            return userWithToken;
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

        // PUT api/<UsersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }

        // PUT api/<UsersController>/5
        [HttpPatch("{id}")]
        public void Patch(int id, [FromBody] string value)
        {

        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TblUser>> Delete(int id)
        {
            var user = await _context.TblUsers.Where(u => u.Id == id).FirstOrDefaultAsync();
            
            if (user == null) return NotFound();

            _context.TblUsers.Remove(user);
            await _context.SaveChangesAsync();
            return user;
        }
        #region PRIVATE METHODS
        private TblRefreshToken GenerateRefreshToken()
        {
            TblRefreshToken refreshToken = new TblRefreshToken();

            var randomNumber = new byte[32];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomNumber);
                refreshToken.Token = Convert.ToBase64String(randomNumber);
            }
            refreshToken.ExpiryDate = DateTime.UtcNow.AddMonths(6);

            return refreshToken;
        }

        private string GenerateAccessToken(int userId)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jwtsettings.SecretKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, Convert.ToString(userId))
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
        #endregion
    }
}
