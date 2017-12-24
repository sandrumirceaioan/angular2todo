import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ToDoService } from '../../services/todoService/todo.service';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  imports: [ CommonModule, HttpModule ],
  declarations: [ TodoListComponent, TodoComponent ],
  exports: [ TodoListComponent ],
  providers: [ ToDoService ]
})
export class TodoListModule { }
