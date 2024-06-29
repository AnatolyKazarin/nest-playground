import {
  Column,
  Model,
  Table,
  DataType,
  BelongsToMany,
  ForeignKey,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";
import { Role } from "./roles.model";

@Table({ tableName: "user_roles", createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({
    example: "1",
    description: "Идентификатор связи пользователя и роли",
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "ADMIN", description: "Role name" })
  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => User)
  userId: number;

  @ApiProperty({
    example: "Role to manage all services",
    description: "Description of a role",
  })
  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Role)
  roleId: number;
}
