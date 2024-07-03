import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @IsString({ message: "Role should be a string" })
  readonly value: string;

  @IsNumber({}, { message: "User ID should be a number" })
  readonly userId: number;
}
