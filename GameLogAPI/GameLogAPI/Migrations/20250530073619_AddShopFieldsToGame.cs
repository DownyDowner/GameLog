using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GameLogAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddShopFieldsToGame : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Shop",
                table: "Games",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ShopLink",
                table: "Games",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Shop",
                table: "Games");

            migrationBuilder.DropColumn(
                name: "ShopLink",
                table: "Games");
        }
    }
}
