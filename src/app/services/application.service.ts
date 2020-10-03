import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Task} from '../shared/task';
import {Tag} from '../shared/tag';

function httpOptions() {
  return {
    headers: new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
}


@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  apiUrl =  environment.apiUrl + 'application/';
  public tagsList: Tag[];
  public tasksList: Task[];


  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl + 'tasks', httpOptions());

  }
  getTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(this.apiUrl + 'tags', httpOptions());
  }
  getTagsList(){
    return this.tagsList;

  }

  // tslint:disable-next-line:typedef
  createTask(model: any){
    return this.http.post(this.apiUrl + 'task', model, httpOptions());
  }
  createTag(model: any){
    return this.http.post(this.apiUrl + 'tag', model, httpOptions());
  }
  // tslint:disable-next-line:typedef
  updateTask
 (model: Task){
    return this.http.put(this.apiUrl + 'task', model);
  }

  updateTag(model: Tag){
    return this.http.put(this.apiUrl + 'tag', model);
  }

  deleteTag(id: any){
    return this.http.delete(this.apiUrl + 'tag/' + id, httpOptions());
  }

}
