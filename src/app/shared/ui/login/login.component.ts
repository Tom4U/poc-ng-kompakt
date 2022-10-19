import { Component } from '@angular/core';
import { Login } from './login';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  login = new Login();

  doLogin(): void {
    console.log('Wird angemeldet ...');
  }
}
