import { ToDoModel } from './todos.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

    constructor(private http: Http){

    }

    getToDoList(){
        return this.http.get('/api/whatToDo')
        .map(response => response.json());
    }

}