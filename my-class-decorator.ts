export function MyClassDecorator(constructor: Function) {
    console.log('MyClassDecorator aufgerufen');

    constructor.prototype.someNewProperty = 'Prop von Class Decorator';
}