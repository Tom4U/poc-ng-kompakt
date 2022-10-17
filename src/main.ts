import { HtmlHelper } from "./html-helper.js";
import { Greeter } from "./greeter.js";

const htmlHelper = new HtmlHelper('#greet-action', '#name', '.output > #greeting');
const greeter = new Greeter(htmlHelper);

document.addEventListener('DOMContentLoaded', () => {
    htmlHelper.getGreetActionElement()?.addEventListener('click', () => greeter.greet());
});