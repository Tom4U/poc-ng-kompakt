"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyMethodDecorator = void 0;
function MyMethodDecorator(execute) {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Ausführung erlaubt: ${execute}`);
            if (execute) {
                const result = originalMethod.apply(this, args);
                return result;
            }
            else {
                console.log('Ausführung gestoppt');
                return null;
            }
        };
        return descriptor;
    };
}
exports.MyMethodDecorator = MyMethodDecorator;
