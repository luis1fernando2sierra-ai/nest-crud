"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const create_task_dto_1 = require("./dto/create-task.dto");
const update_task_dto_1 = require("./dto/update-task.dto");
@(0, common_1.Injectable)()
class TasksService {
    create(createTaskDto) {
        return 'This action adds a new task';
    }
    findAll() {
        return `This action returns all tasks`;
    }
    findOne(id) {
        return `This action returns a #${id} task`;
    }
    update(id, updateTaskDto) {
        return `This action updates a #${id} task`;
    }
    remove(id) {
        return `This action removes a #${id} task`;
    }
}
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map