import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "email@mail.com", description: "Email" })
  @IsString({ message: "Should be a string value" })
  @IsEmail({}, { message: "Wrong email form" })
  readonly email: string;

  @ApiProperty({ example: "123456", description: "Password" })
  @IsString({ message: "Should be a string value" })
  @Length(4, 16, { message: "Password should be from 4 to 16 letters long" })
  readonly password: string;
}
