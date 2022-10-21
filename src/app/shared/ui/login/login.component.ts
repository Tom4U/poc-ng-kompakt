import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
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
  form: FormGroup;
  hasError = false;

  constructor(private auth: AuthService, formBuilder: FormBuilder) {
    auth.authenticationError.subscribe(hasError => this.hasError = hasError);
    auth.authenticated.subscribe(authenticated => {
      if (authenticated) this.close.emit();
    });

    this.form = this.login.toForm(formBuilder);
  }

  doLogin(): void {
    const {username, password} = this.form.value;

    if (this.form.dirty && this.form.valid) {
      this.auth.login(username, password);
    }
  }
}
