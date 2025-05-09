﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GameLogAPI.Migrations
{
    /// <inheritdoc />
    public partial class PlatformUniqueName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Platforms_Name",
                table: "Platforms",
                column: "Name",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Platforms_Name",
                table: "Platforms");
        }
    }
}
