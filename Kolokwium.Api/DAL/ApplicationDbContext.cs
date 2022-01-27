using Microsoft.EntityFrameworkCore;

namespace Kolokwium.Api
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Address> Addresses{get; set;}
        
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Address>(addressBuilder =>
            {
                addressBuilder.Property(address => address.street).IsRequired();
                addressBuilder.Property(address => address.zipCode).IsRequired();
                addressBuilder.Property(address => address.number).IsRequired();
                addressBuilder.Property(address => address.city).IsRequired();

            });

        }
    }
}