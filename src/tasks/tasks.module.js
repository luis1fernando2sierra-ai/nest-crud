"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const tasks_controller_1 = require("./tasks.controller");
@(0, common_1.Module)({
    controllers: [tasks_controller_1.TasksController],
    providers: [tasks_service_1.TasksService],
})
class TasksModule {
}
exports.TasksModule = TasksModule;
//# sourceMappingURL=tasks.module.js.map