import { MyMethodDecorator } from "./my-method-decorator";
import { MyClassDecorator } from "./my-class-decorator";
import { MyPropertyDecorator } from "./my-property-decorator";

@MyClassDecorator
class MyClass {
    @MyPropertyDecorator() someProperty = 'somePropertyValue';

    @MyMethodDecorator(true)
    someMethod():  void {
        console.log(`Wert von someProperty: ${this.someProperty}`);
    }
}

const myClass = new MyClass;
myClass.someMethod();
