import { Component, EventEmitter } from '@angular/core';
import { Command } from 'src/app/shared/ui/command/command';

@Component({
  selector: "app-greeter-form",
  templateUrl: "./greeter-form.component.html",
  styleUrls: ['./greeter-form.component.scss'],
})
export class GreeterFormComponent {
  name = "";
  nameChange = new EventEmitter<string>();

  sayHelloCommand = new Command(
    "Sag Hallo",
    () => {
      console.log('emitting');
      console.log(this.nameChange);
      this.nameChange.emit(this.name);
    },
    () => true
  );
}
