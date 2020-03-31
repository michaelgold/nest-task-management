import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { SetStatusDto } from './dto/set-status.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService : TasksService) {}

    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
        if (Object.keys(filterDto).length) {
            return this.taskService.getTasksWithFilters(filterDto);
        } else {
            return this.taskService.getAllTasks();
        }
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.taskService.getTaskById(id);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id: string): void {
        this.taskService.deleteTaskById(id);
    }
    
    @Patch ('/:id/status')
    setStatusById(@Param('id') id: string, @Body() setStatusDto: SetStatusDto): Task {
        return this.taskService.setStatusById(id, setStatusDto);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.createTask(createTaskDto);
    }

}
