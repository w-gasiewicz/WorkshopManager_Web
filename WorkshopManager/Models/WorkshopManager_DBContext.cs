using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace WorkshopManager.Models
{
    public partial class WorkshopManager_DBContext : DbContext
    {
        public WorkshopManager_DBContext()
        {
        }

        public WorkshopManager_DBContext(DbContextOptions<WorkshopManager_DBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Roles> TblRoles { get; set; }
        public virtual DbSet<Users> TblUsers { get; set; }
        public virtual DbSet<Vehicles> TblVehicles { get; set; }
        public virtual DbSet<Works> TblWorks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Name=WorkshopManager_DB");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Polish_CI_AS");

            modelBuilder.Entity<Roles>(entity =>
            {
                entity.ToTable("tbl_ROLES");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.RoleName)
                    .IsRequired()
                    .HasMaxLength(64)
                    .HasColumnName("ROLE_NAME")
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.ToTable("tbl_USERS");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Login)
                    .IsRequired()
                    .HasMaxLength(128)
                    .HasColumnName("LOGIN")
                    .IsFixedLength(true);

                entity.Property(e => e.Name)
                    .HasMaxLength(64)
                    .HasColumnName("NAME")
                    .IsFixedLength(true);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(518)
                    .HasColumnName("PASSWORD")
                    .IsFixedLength(true);

                entity.Property(e => e.RoleId).HasColumnName("ROLE_ID");

                entity.Property(e => e.Surname)
                    .HasMaxLength(64)
                    .HasColumnName("SURNAME")
                    .IsFixedLength(true);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.TblUsers)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_tbl_USERS_tbl_ROLES");
            });

            modelBuilder.Entity<Vehicles>(entity =>
            {
                entity.ToTable("tbl_VEHICLES");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Make)
                    .HasMaxLength(64)
                    .HasColumnName("MAKE")
                    .IsFixedLength(true);

                entity.Property(e => e.Model)
                    .HasMaxLength(64)
                    .HasColumnName("MODEL")
                    .IsFixedLength(true);

                entity.Property(e => e.PlateNumber)
                    .HasMaxLength(10)
                    .HasColumnName("PLATE_NUMBER")
                    .IsFixedLength(true);

                entity.Property(e => e.VinNumber)
                    .HasMaxLength(17)
                    .HasColumnName("VIN_NUMBER")
                    .IsFixedLength(true);

                entity.Property(e => e.YearOfProduction)
                    .HasColumnType("date")
                    .HasColumnName("YEAR_OF_PRODUCTION");
            });

            modelBuilder.Entity<Works>(entity =>
            {
                entity.ToTable("tbl_WORK");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.EndDate)
                    .HasColumnType("datetime")
                    .HasColumnName("END_DATE");

                entity.Property(e => e.NumberOfWorkHours)
                    .HasColumnType("decimal(5, 2)")
                    .HasColumnName("NUMBER_OF_WORK_HOURS");

                entity.Property(e => e.StartDate)
                    .HasColumnType("datetime")
                    .HasColumnName("START_DATE");

                entity.Property(e => e.UserId).HasColumnName("USER_ID");

                entity.Property(e => e.VehicleId).HasColumnName("VEHICLE_ID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.TblWorks)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_tbl_WORK_tbl_USERS");

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.TblWorks)
                    .HasForeignKey(d => d.VehicleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_tbl_WORK_tbl_VEHICLES");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
