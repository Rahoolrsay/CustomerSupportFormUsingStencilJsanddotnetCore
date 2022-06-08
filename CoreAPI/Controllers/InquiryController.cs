using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreAPI.DB;
using CoreAPI.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace CoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InquiryController : ControllerBase
    {
        private readonly ApiContext _context;
        private readonly ILogger<InquiryController> _logger;
        public InquiryController(ApiContext context, ILogger<InquiryController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Post(Inquiry inquiry)
        {
            try
            {
                if (inquiry == null)
                    return BadRequest("Please add correct values.");

                inquiry.Id = DateTime.Now.ToUniversalTime().ToString();

                _context.Inquiries.Add(inquiry);
                _context.SaveChanges();

                return Ok("Successfully submitted the Inquiry.");
            }
            catch (Exception ex){
                return exceptionMessage(ex);
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var Inquiries = _context.Inquiries
                    .ToArray();

                return Ok(Inquiries);
            }
            catch (Exception ex)
            {
                return exceptionMessage(ex);
            }
        }

        private IActionResult exceptionMessage(Exception ex)
        {
            _logger.LogError(ex.Message, ex);
            return Conflict("Something went wrong. Please try after some time");
        }

    }
}
