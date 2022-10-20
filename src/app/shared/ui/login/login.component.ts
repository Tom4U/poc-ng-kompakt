import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from './login';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  @Output() close = new EventEmitter();

  login = new Login();
  hasError = false;

  constructor(private auth: AuthService) {
    auth.authenticationError.subscribe(hasError => this.hasError = hasError);
    auth.authenticated.subscribe(authenticated => {
      if (authenticated) this.close.emit();
    })
  }

  doLogin(form: NgForm): void {
    const {username, password} = this.login;

    if (form.dirty && form.valid) this.auth.login(username, password);
  }
}
