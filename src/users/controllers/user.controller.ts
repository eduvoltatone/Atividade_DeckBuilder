// src/users/controllers/user.controller.ts
import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() userDto: Partial<User>): Promise<User> {
        return this.userService.createUser(userDto);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() userDto: Partial<User>): Promise<User> {
        return this.userService.update(id, userDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.userService.remove(id);
    }
}