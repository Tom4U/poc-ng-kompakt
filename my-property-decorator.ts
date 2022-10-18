export function MyPropertyDecorator() {
    return function(target: any, key: string | symbol) {
        let value = target[key];

        const getter = () => {
            console.log('Wert wird ausgelesen');
            return value;
        }

        const setter = (newValue: any) => {
            console.log('Wert wird geändert');
            value = `>>${newValue}<<`;
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}