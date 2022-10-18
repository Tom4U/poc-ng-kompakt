"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClassDecorator = void 0;
function MyClassDecorator(constructor) {
    console.log('MyClassDecorator aufgerufen');
    constructor.prototype.someNewProperty = 'Prop von Class Decorator';
}
exports.MyClassDecorator = MyClassDecorator;
