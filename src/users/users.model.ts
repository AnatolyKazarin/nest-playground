import {
  Column,
  Model,
  Table,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";

interface UserCreationAttribute {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttribute> {
  @ApiProperty({ example: "1", description: "Идентификатор пользователя" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "adfdsf@mail.com", description: "Email" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: "password", description: "Password" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: "true", description: "Banned" })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({ example: "За грубость", description: "Причина бана" })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  bannedReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
