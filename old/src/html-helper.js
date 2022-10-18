export class HtmlHelper {
    constructor(greetActionSelector, nameSelector, greetingSelector) {
        this.greetActionSelector = greetActionSelector;
        this.nameSelector = nameSelector;
        this.greetingSelector = greetingSelector;
    }
    getGreetActionElement() {
        return document.querySelector(this.greetActionSelector);
    }
    getNameFromElement() {
        const element = document.querySelector(this.nameSelector);
        return (element === null || element === void 0 ? void 0 : element.value) || 'Gast';
    }
    getGreetingElement() {
        return document.querySelector(this.greetingSelector);
    }
}
