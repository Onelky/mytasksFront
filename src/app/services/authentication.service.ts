import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token: string;
  apiUrl = 'https://localhost:5001/api/authentication/';
  header: any;
  value: any;

  httpOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
  }

  constructor(private http: HttpClient) {
    const headerSettings = {
      'Content-Type': 'application/json; charset=utf-8',
    };
    this.header = {
      headers: new HttpHeaders(headerSettings)};
  }
  // tslint:disable-next-line:typedef
  login(model?: any)
  {
    // return this.http.post(this.apiUrl + 'login', model).pipe();
    return this.http.post(this.apiUrl + 'login', model, this.header).pipe(
      map((response: any) => {
        const user = response;
        if (user){
          localStorage.setItem('token', user.token);
          localStorage.setItem('email', user.email);
        }
    }));
  }
  // tslint:disable-next-line:typedef
  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }
  register(model?: any)
  {
    return this.http.post(this.apiUrl + 'register', JSON.stringify(model), this.header).pipe();
  }
  changePassword(model: any){
    return this.http.put(this.apiUrl + 'changepassword', model, this.httpOptions());
  }
}
