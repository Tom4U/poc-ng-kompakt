"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPropertyDecorator = void 0;
function MyPropertyDecorator() {
    return function (target, key) {
        let value = target[key];
        const getter = () => {
            console.log('Wert wird ausgelesen');
            return value;
        };
        const setter = (newValue) => {
            console.log('Wert wird geändert');
            value = `>>${newValue}<<`;
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}
exports.MyPropertyDecorator = MyPropertyDecorator;
