import { Component, EventEmitter, Output } from '@angular/core';
import { Login } from './login';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  @Output() close = new EventEmitter<Login>();

  login = new Login();

  doLogin(): void {
    this.close.emit(this.login);
  }
}
