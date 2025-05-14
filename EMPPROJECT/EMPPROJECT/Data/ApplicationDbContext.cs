using EMPPROJECT.Model;
using Microsoft.EntityFrameworkCore;

namespace EMPPROJECT.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
           : base(options)
        {
        }


        public DbSet<EmployeeMaster1> EmployeeMaster1 { get; set; }

        public DbSet<EmployeePassword> EmployeePassword { get; set; }
        public DbSet<Model.Task> Tasks { get; set; }

    }
}
