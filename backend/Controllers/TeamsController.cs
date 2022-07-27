
using FourBets.Data;

using FourBets.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FourBets.Controllers;

[Route("api/teams")]
[ApiController]
public class TeamsController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IWebHostEnvironment _env;
    public TeamsController(ApplicationDbContext context, IWebHostEnvironment env)
    {
        _context = context;
        _env = env;
    }

    // GET: api/Teams
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Team>>> GetTeams()
    {
        return await _context.Teams.ToListAsync();
    }

    // GET: api/Teams/
    [HttpGet("{id}")]
    public async Task<ActionResult<Team>> GetTeam(Guid id)
    {
        var footballTeam = await _context.Teams.FindAsync(id);

        if (footballTeam == null)
        {
            return NotFound();
        }

        return footballTeam;
    }

    // PUT: api/FootballTeams/5

    [HttpPut("{id}")]
    public async Task<IActionResult> PutFootballTeam(Guid id, Team footballTeam)
    {
        if (id != footballTeam.Id)
        {
            return BadRequest();
        }

        _context.Entry(footballTeam).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!TeamExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // POST: api/FootballTeams
    [HttpPost]
    public async Task<ActionResult<Team>> PostFootballTeam(Team footballTeam)
    {
        _context.Teams.Add(footballTeam);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetTeam", new { id = footballTeam.Id }, footballTeam);
    }

    // DELETE: api/Teams/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTeam(Guid id)
    {
        var team = await _context.Teams.FindAsync(id);
        if (team == null)
        {
            return NotFound();
        }

        _context.Teams.Remove(team);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool TeamExists(Guid id)
    {
        return _context.Teams.Any(e => e.Id == id);
    }

    [Route("UploadImage")]
    [HttpPost]
    public async Task<string> Upload()
    {
        try
        {
            var httpRequest = Request.Form;
            var postedFile = httpRequest.Files[0];
            string filename = new String(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");
            filename = filename + DateTime.Now.ToString("yyyy-MM-dd-HH-mm-ssff") + Path.GetExtension(postedFile.FileName);
            var imagePath = _env.ContentRootPath + "/Image/" + filename;

            using (var stream = new FileStream(imagePath, FileMode.Create))
            {
                await postedFile.CopyToAsync(stream);
            }

            return filename;
        }
        catch (Exception)
        {

            return "anonymous.png";
        }
    }
}
