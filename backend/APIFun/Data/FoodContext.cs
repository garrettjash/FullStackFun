using Microsoft.EntityFrameworkCore;

namespace APIFun.Data
{
    public class FoodContext : DbContext
    {
        public FoodContext(DbContextOptions<FoodContext> options) : base(options) { }

        public DbSet<MarriottFood> Foods { get; set; }
    }
}
