import { Component } from '@angular/core';
import { ToDoModel } from './todos.model';
import { TODOS } from './todos.service';

@Component({
    selector: 'todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})

export class ToDoListComponent {
    todos: ToDoModel[];
    ngOnInit(){
        this.todos = TODOS;
    }

    setDone(todo){
        todo.solved = true;
    }
}