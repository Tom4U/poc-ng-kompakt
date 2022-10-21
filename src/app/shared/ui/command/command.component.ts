import { Component, Input, OnInit } from "@angular/core";
import { Command } from "./command";

@Component({
  selector: "app-command",
  templateUrl: "./command.component.html",
})
export class CommandComponent implements OnInit {
  @Input() command?: Command;

  constructor() {}

  ngOnInit(): void {}
}
