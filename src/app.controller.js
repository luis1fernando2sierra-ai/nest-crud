"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
@(0, common_1.Controller)()
class AppController {
    @(0, common_1.Get)()
    getHello() {
        return '¡Hola mundo! Bienvenido a tu primera API.';
    }
    @(0, common_1.Get)('saludo/:nombre')
    getPersonalizado(
    @(0, common_1.Param)('nombre')
    nombre) {
        return `¡Hola Luis ! NestJS reconoce quién eres.`;
    }
}
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map