"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskDto = void 0;
const class_validator_1 = require("class-validator");
class CreateTaskDto {
    @(0, class_validator_1.IsString)()
    @(0, class_validator_1.IsNotEmpty)()
    title;
    @(0, class_validator_1.IsString)()
    @(0, class_validator_1.IsOptional)()
    description;
}
exports.CreateTaskDto = CreateTaskDto;
//# sourceMappingURL=create-task.dto.js.map