using EMPPROJECT.Data;
using EMPPROJECT.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;

namespace EMPPROJECT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Emp : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public Emp(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpPost("register")]
        public IActionResult RegisterEmployee([FromBody] Model.EmployeeMaster1 employee)
        {
            if (employee == null)
                return BadRequest();

            _context.EmployeeMaster1.Add(employee);
            _context.SaveChanges();

            return Ok(new { message = "Employee registered successfully!" });
        }

        [HttpGet("employees")]
        public IActionResult GetAllEmployees()
        {
            var employees = _context.EmployeeMaster1.ToList();
            return Ok(employees);
        }

        [HttpGet("id")]
        public IActionResult GetEmployeeById(int id)
        
        {
            var employee = _context.EmployeeMaster1.FirstOrDefault(e => e.Id == id);

            if (employee == null)
            {
                return NotFound(new { message = "Employee not found" });
            }

            return Ok(employee);
        }


        [HttpPost("login")]
        public IActionResult Login([FromBody] EmployeePassword request)
        {
            if (request == null || string.IsNullOrEmpty(Convert.ToString(request.Id)) || string.IsNullOrEmpty(request.Password))
                return BadRequest("Invalid credentials");

            var employee = _context.EmployeePassword


                .FirstOrDefault(e => e.Id == request.Id && e.Password == request.Password);

            if (employee == null)
                return Unauthorized(new { message = "Login failed. Invalid employee code or password." });

            return Ok(new
            {
                message = "Login successful",
                employee.Id,
                //employee.,
                //employee.Email
                // Add other fields as needed
            });
        }

        [HttpPost("setpassword")]
        public IActionResult SetPassword([FromBody] Model.EmployeePassword password)
        {
            if (password == null)
                return BadRequest();

            _context.EmployeePassword.Add(password);
            _context.SaveChanges();

            return Ok(new { message = "Employee registered successfully!" });
        }


        [HttpPost("updatepassword")]
        public IActionResult UpdatePassword([FromBody] EmployeePassword request)
        {
            var employee = _context.EmployeePassword.FirstOrDefault(e => e.Id == request.Id);

            if (employee == null)
                return NotFound("Employee not found");

            //if (employee.Password != request.Password)
            //    return BadRequest("Old password is incorrect");

            employee.Password = request.Password;
            _context.SaveChanges();

            return Ok(new { message = "Password updated successfully" });
        }

        [HttpPost("assign")]
        public async Task<IActionResult> AssignTask([FromBody] Model.Task taskDto)
        {
            if (taskDto == null)
            {
                return BadRequest("Invalid task data.");
            }

            // Create a new Task object from the DTO
            var task = new Model.Task
            {
                EmployeeId = taskDto.EmployeeId,
                Title = taskDto.Title,
                Description = taskDto.Description,
                AssignedAt = DateTime.UtcNow
            };

            // Save task to database
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Task assigned successfully." });
        }

        [HttpGet("viewtask")]
        public IActionResult ViewTask(int id)

        {
            var employee = _context.Tasks.FirstOrDefault(e => e.Id == id);

            if (employee == null)
            {
                return NotFound(new { message = "Employee not found" });
            }

            return Ok(employee);
        }


        [HttpPost("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear(); // Clear the session
            return Ok(new { message = "Logged out successfully" });
        }



    }
}
