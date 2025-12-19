import { Controller, Get, Post, Put, Delete } from '@hestjs/core';
import { UsersService } from '../services/users.service';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  async findAll() {
    // return this.usersService.findAll();
    return "hello hestjs ref springBoot annotation";
  }

  @Get('/:id')
  async findOne(id: string) {
    return this.usersService.findOne(id);
  }

  @Post('/')
  async create(data: any) {
    return this.usersService.create(data);
  }

  @Put('/:id')
  async update(id: string, data: any) {
    return this.usersService.update(id, data);
  }

  @Delete('/:id')
  async delete(id: string) {
    return this.usersService.delete(id);
  }
}