import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({ example: "ADMIN", description: "Role to be set for a user" })
  readonly name: string;

  @ApiProperty({
    example: "Role for changing passwords ... ",
    description: "Description about a role",
  })
  readonly description: string;
}
