import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from '../model/to-do';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private apiurl='http://localhost:3000/todos';
  constructor(private httpClient:HttpClient) { }
  getAllTodos():Observable<ToDo[]>{
    return this.httpClient.get<ToDo[]>(this.apiurl);
  }
  createToDo(todo:ToDo):Observable<ToDo>{
    return this.httpClient.post<ToDo>(this.apiurl,JSON.stringify(todo));
  }
  deleteTodo(todoId:string): Observable<void>{
    return this.httpClient.delete<void>(`${this.apiurl}/${todoId}`);
  }
  updateToDo(newtodo:ToDo):Observable<ToDo>{
    return this.httpClient.put<ToDo>(`${this.apiurl}/${newtodo.id}`,JSON.stringify(newtodo));
  }
  getTodoById(todoId:string):Observable <ToDo>{

   return this.httpClient.get<ToDo>(`${this.apiurl}/${todoId}`);
  }
}
