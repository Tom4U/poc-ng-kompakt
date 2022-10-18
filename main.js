"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const my_method_decorator_1 = require("./my-method-decorator");
const my_class_decorator_1 = require("./my-class-decorator");
const my_property_decorator_1 = require("./my-property-decorator");
let MyClass = class MyClass {
    constructor() {
        this.someProperty = 'somePropertyValue';
    }
    someMethod() {
        console.log(`Wert von someProperty: ${this.someProperty}`);
    }
};
__decorate([
    (0, my_property_decorator_1.MyPropertyDecorator)()
], MyClass.prototype, "someProperty", void 0);
__decorate([
    (0, my_method_decorator_1.MyMethodDecorator)(true)
], MyClass.prototype, "someMethod", null);
MyClass = __decorate([
    my_class_decorator_1.MyClassDecorator
], MyClass);
const myClass = new MyClass;
myClass.someMethod();
