import { Component, EventEmitter, Output } from '@angular/core';
import { Command } from 'src/app/shared/ui/command/command';

@Component({
  selector: "app-greeter-form",
  templateUrl: "./greeter-form.component.html",
  styleUrls: ["./greeter-form.component.scss"],
})
export class GreeterFormComponent {
  @Output() nameChange = new EventEmitter<string>();
  name = "";

  sayHelloCommand = new Command(
    "Sag Hallo",
    () => this.nameChange.emit(this.name),
    () => true
  );
}
