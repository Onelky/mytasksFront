import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Task} from '../shared/task';

function httpOptions() {
  return {
    headers: new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json; charset=utf-8'
    })
  }
}


@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private header: any;
  apiUrl =  environment.apiUrl + 'application/';

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl + 'tasks', httpOptions());

  }
}
