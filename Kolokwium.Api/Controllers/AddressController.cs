using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Kolokwium.Api.Controllers
{

    [ApiController]
    [Produces("application/json")]
    [Route("address")]

    public class AddressController : ControllerBase
    {
        private ApplicationDbContext DbContext;
        public AddressController(ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAddress()
        {
            try
            {
                var address = await DbContext.Addresses.ToListAsync();
                if (address == null)
                {
                    return NotFound("couldnt find address");
                }
                else
                {
                    return Ok(address);
                }
            }
            catch
            {
                return this.Problem(detail: "error", title: "error");
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddSAddress(Address address)
        {
            try
            {
                DbContext.Addresses.Add(address);
                await DbContext.SaveChangesAsync();
                return Ok(address);
            }
            catch
            {
                return this.Problem(detail: "error", title: "error");
            }
        }


        [HttpPut]
        public async Task<IActionResult> EditAddress(Address address)
        {
            try
            {
                var addressToChange = DbContext.Addresses.First(item => item.id == address.id);
                addressToChange.street = address.street;
                addressToChange.zipCode = address.zipCode;
                addressToChange.number = address.number;
                addressToChange.city = address.city;

                await DbContext.SaveChangesAsync();

                return Ok(addressToChange);
            }
            catch
            {
                return this.Problem(detail: "error", title: "error");
            }
        }
    }
}