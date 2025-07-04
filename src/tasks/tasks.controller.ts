import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/task-create.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id)
  }

  @Post()
  createATask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createATask(createTaskDto);
  }

  @Delete('/:id')
  deleteATask(@Param('id') id:string): void {
    return this.tasksService.deleteATask(id)
  }

}
