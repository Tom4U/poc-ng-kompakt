import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = new EventEmitter<boolean>();
  authenticationError = new EventEmitter<boolean>()

  private readonly user = 'user';
  private readonly password = '1234';

  constructor() { }

  login(user: string, password: string): void {
    const authenticated = user === this.user && password === this.password;

    this.authenticated.emit(authenticated);
    this.authenticationError.emit(!authenticated);
  }

  logout(): void {
    this.authenticated.emit(false);
  }
}
