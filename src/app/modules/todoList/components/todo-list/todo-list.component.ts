import { Component, OnInit } from '@angular/core';
import { ToDoModel } from '../../../../models/todo.model';
import { ToDoService } from '../../../../services/todoService/todo.service';
import { TODOS } from '../../../../services/todoService/todo.mock';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    todos: ToDoModel[];
    constructor(private toDoService: ToDoService) { }

    ngOnInit() {
      //this.toDoService.getToDoList().subscribe(todos => {this.todos = todos});
      this.todos = TODOS;
    }

}
