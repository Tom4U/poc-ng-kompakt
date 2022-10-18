export function MyMethodDecorator(execute: boolean) {
    return function(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            console.log(`Ausführung erlaubt: ${execute}`);

            if (execute) {
                const result = originalMethod.apply(this, args);
                return result;
            } else {
                console.log('Ausführung gestoppt');
                return null;
            }
        }

        return descriptor;
    }
}