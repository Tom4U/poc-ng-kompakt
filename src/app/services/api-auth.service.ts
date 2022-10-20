import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../shared/ui/login/login';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService extends AuthService {
  private readonly apiUrl = `${environment.apiUrl}/users`;

  constructor(private httpClient: HttpClient) { 
    super();
  }

  override login(user: string, password: string): void {
    const request = this.httpClient.get<Login[]>(`${this.apiUrl}/?username=${user}`);

    request.subscribe(users => {
      if (users.length === 0) {
        this.authenticationError.emit(true);
        return;
      }

      const authenticated = users[0].password === password;

      this.authenticated.emit(authenticated);
      this.authenticationError.emit(!authenticated);
    });
  }
}
