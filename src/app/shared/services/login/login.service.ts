import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment_url } from 'src/environments/environment.prod';
import { LoginRequest, LoginResponse } from 'src/app/shared/models';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(loginBody: LoginRequest): Observable<LoginResponse> {
    let url = environment_url + 'login';
    return this.http.post<LoginResponse>(url, loginBody);
  }
}
