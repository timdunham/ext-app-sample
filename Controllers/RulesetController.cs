using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace ExternalAppSample
{
    [ApiController]
    [Route("api/[controller]")]
    public class RulesetController : ControllerBase
    {
        private readonly IWebHostEnvironment _hostingEnvironment;

        public RulesetController(IWebHostEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }
        [HttpGet]
        public string Sample()
        {
            var baseUrl = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}";
            var oldBase = $"https://localhost:5001";
            var path = Path.Combine(_hostingEnvironment.ContentRootPath, "Default.SampleExternalApplication.xml");
            var x = System.IO.File.ReadAllText(path);
            return x.Replace(oldBase, baseUrl);
        }
    }
}