import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todoList/components/todo-list/todo-list.component';
import { TodoAddComponent } from './todoAdd/components/todo-add/todo-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: TodoListComponent, data: {path: 'list'} },
  { path: 'add', component: TodoAddComponent, data: {path: 'add'} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
