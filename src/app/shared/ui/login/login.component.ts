import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from './login';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  login = new Login();
  form: FormGroup;
  hasError = false;

  constructor(private auth: AuthService, private router: Router, formBuilder: FormBuilder) {
    auth.authenticationError.subscribe(hasError => this.hasError = hasError);
    auth.authenticated.subscribe(authenticated => {
      if (authenticated) router.navigate(['']);
    });

    this.form = this.login.toForm(formBuilder);
  }

  doLogin(): void {
    const {username, password} = this.form.value;

    if (this.form.dirty && this.form.valid) {
      this.auth.login(username, password);
    }
  }

  cancel(): void {
    this.router.navigate(['']);
  }
}
