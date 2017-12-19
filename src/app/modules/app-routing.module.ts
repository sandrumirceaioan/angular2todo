import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todoList/components/todo-list/todo-list.component';
import { TodoAddComponent } from './todoAdd/components/todo-add/todo-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: TodoListComponent, data: {title: 'To-Do List'} },
  { path: 'add', component: TodoAddComponent, data: {title: 'Add To-Do'} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
