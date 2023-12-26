import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getTodo(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }
}
