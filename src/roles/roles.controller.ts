import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateRoleDto } from "./dto/roles.dto";
import { RolesService } from "./roles.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Role } from "./roles.model";

@ApiTags("Roles")
@Controller("roles")
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: "Создание роли" })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: "Получение всех ролей" })
  @ApiResponse({ status: 200, type: [Role] })
  @Get("/:name")
  getAll(@Param("name") name: string) {
    return this.roleService.getRoleByName(name);
  }
}
