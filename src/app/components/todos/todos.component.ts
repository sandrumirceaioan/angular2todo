import { Component } from '@angular/core';
import { ToDoModel } from './todos.model';
import { TodoService } from './todos.service';

@Component({
    selector: 'todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})

export class ToDoListComponent {
    todos: ToDoModel[];
    constructor(private todoService: TodoService){ }

    ngOnInit(){
        let todoService = new TodoService();
        this.todos = this.todoService.getTodos();
    }

    setDone(todo){
        todo.solved = true;
    }
}