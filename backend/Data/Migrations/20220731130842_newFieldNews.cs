using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Data.Migrations
{
    public partial class newFieldNews : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("cdccea2b-0452-4672-a695-a4f9f2884418"));

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "News",
                type: "TEXT",
                nullable: true);

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "GroupId", "IsBlocked", "NickName", "Password", "PhotoUrl", "Rating", "RoleId" },
                values: new object[] { new Guid("f3eb6cb1-a597-40ae-afc1-425d6206416d"), "test@gmail.com", null, false, "test", "$2a$12$JfLmgP1t4gLTMh9D6gdKB.r9bkobfE42a3j8M3jdz8WAey2ikMwnu", null, 0u, new Guid("9e3d2d63-3669-4897-8f57-c98e5df0123f") });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("f3eb6cb1-a597-40ae-afc1-425d6206416d"));

            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "News");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "GroupId", "IsBlocked", "NickName", "Password", "PhotoUrl", "Rating", "RoleId" },
                values: new object[] { new Guid("cdccea2b-0452-4672-a695-a4f9f2884418"), "test@gmail.com", null, false, "test", "$2a$12$JfLmgP1t4gLTMh9D6gdKB.r9bkobfE42a3j8M3jdz8WAey2ikMwnu", null, 0u, new Guid("9e3d2d63-3669-4897-8f57-c98e5df0123f") });
        }
    }
}
