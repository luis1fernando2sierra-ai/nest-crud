"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const create_task_dto_1 = require("./dto/create-task.dto");
const update_task_dto_1 = require("./dto/update-task.dto");
@(0, common_1.Controller)('tasks')
class TasksController {
    tasksService;
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    @(0, common_1.Post)()
    create(
    @(0, common_1.Body)()
    createTaskDto) {
        return this.tasksService.create(createTaskDto);
    }
    @(0, common_1.Get)()
    findAll() {
        return this.tasksService.findAll();
    }
    @(0, common_1.Get)(':id')
    findOne(
    @(0, common_1.Param)('id')
    id) {
        return this.tasksService.findOne(+id);
    }
    @(0, common_1.Patch)(':id')
    update(
    @(0, common_1.Param)('id')
    id, 
    @(0, common_1.Body)()
    updateTaskDto) {
        return this.tasksService.update(+id, updateTaskDto);
    }
    @(0, common_1.Delete)(':id')
    remove(
    @(0, common_1.Param)('id')
    id) {
        return this.tasksService.remove(+id);
    }
}
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map