import { Component, EventEmitter, Output } from '@angular/core';
import { NameService } from 'src/app/services/name.service';
import { Command } from 'src/app/shared/ui/command/command';

@Component({
  selector: "app-greeter-form",
  templateUrl: "./greeter-form.component.html",
  styleUrls: ['./greeter-form.component.scss'],
})
export class GreeterFormComponent {
  name = "";

  sayHelloCommand = new Command(
    "Sag Hallo",
    () => this.nameSvc.setName(this.name),
    () => true
  );

  constructor(private nameSvc: NameService) {}
}
