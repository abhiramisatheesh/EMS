using EMPPROJECT.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();



//app.UseHttpsRedirection();


//builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("Conn")));

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Conn")));

builder.Services.AddControllers();
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Employee Management API", Version = "v1" });
});

//var app = builder.Build();

//// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI(c =>
//    {
//        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Employee Management API v1");
//    });
//}

//app.UseEndpoints(endpoints =>
//{
//    endpoints.MapControllers();
//});

//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowReactApp",
//        policy =>
//        {
//            policy.WithOrigins("http://localhost:5174", "https://localhost:7274")
//                  .AllowAnyHeader()
//                  .AllowAnyMethod();
//        });
//});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173")  // React's localhost
                        .AllowAnyHeader()
                        .AllowAnyMethod();
        });
});

//app.UseCors("AllowReactApp");  // Add this line after `UseRouting()`

builder.Services.AddSwaggerGen();

var app = builder.Build();
// Use CORS policy
app.UseCors("AllowReactApp");
app.UseSwagger();
app.UseSwaggerUI();
app.UseRouting();



app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});


app.Run();

internal record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
