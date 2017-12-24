import { ToDoModel } from '../../models/todo.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';

@Injectable()
export class ToDoService {

    constructor(private http: Http){

    }

    getToDoList(){
        return this.http.get('/api/whatToDo')
        .map(response => {
            return response.json()
        });
    }

    // getToDoList(){
    //     return TODOS;
    // }
}