import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {observable} from 'rxjs';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token: string;
  apiUrl = 'https://localhost:5001/api/authentication/';
  header: any;
  value: any;

  constructor(private http: HttpClient) {
    const headerSettings: {[name: string]: string | string[]; } = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    };
    this.header = new HttpHeaders(headerSettings);
  }
  // tslint:disable-next-line:typedef
  login(model?: any)
  {
    // return this.http.post(this.apiUrl + 'login', model).pipe();
    return this.http.post(this.apiUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        localStorage.setItem('token', user.token);
  })
    );
  }
}
