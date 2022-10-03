using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TailSpin.SpaceGame.Web.Models;
using TailSpin.SpaceGame.Web.Services;

namespace TailSpin.SpaceGame.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly IGaService _gaService;

        public HomeController()
        {
            this._gaService = new Ga1Service();
        }

        public async Task<IActionResult> Index()
        {
            var vm = new GaViewModel()
            {
                Disassembler = this._gaService.GetDisassembler()
            };
            
            return View(vm);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
