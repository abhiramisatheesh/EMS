namespace EMPPROJECT.Model
{
    public class Task
    {
        
            public int Id { get; set; }
            public int EmployeeId { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public DateTime AssignedAt { get; set; }
        

    }
}
