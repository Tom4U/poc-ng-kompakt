import { HtmlHelper } from "./html-helper.js";
import { Greeter } from "./greeter.js";
const htmlHelper = new HtmlHelper('#greet-action', '#name', '.output > #greeting');
const greeter = new Greeter(htmlHelper);
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = htmlHelper.getGreetActionElement()) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => greeter.greet());
});
