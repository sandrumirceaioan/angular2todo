import { ToDoModel } from '../../models/todo.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TODOS } from './todo.mock';

// Import RxJs required methods
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

    constructor(private http: Http){

    }

    // getToDoList(){
    //     return this.http.get('/api/whatToDo')
    //     .map(response => response.json());
    // }

    getToDoList(){
        return TODOS;
    }
}