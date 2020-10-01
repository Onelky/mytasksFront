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

  // tslint:disable-next-line:typedef
  httpOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json; charset=utf-8',
      })
    };
  }

  // tslint:disable-next-line:typedef
  httpOptionsEmail() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,

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
  // tslint:disable-next-line:typedef
  register(model?: any)
  {
    return this.http.post(this.apiUrl + 'register', JSON.stringify(model), this.header).pipe();
  }
  // tslint:disable-next-line:typedef
  changePassword(model: any){
    return this.http.put(this.apiUrl + 'changepassword', model, this.httpOptions());
  }
  // tslint:disable-next-line:typedef
  changeEmail(newEmail: string){
    return this.http.put(this.apiUrl + 'changeemail/' + newEmail, '',  this.httpOptionsEmail());
  }
}
