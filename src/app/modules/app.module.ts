/* app browser module and main app module */
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';

/* main component */
import { AppComponent } from '../../app/modules/app.component';

/* routing module */
import { AppRoutingModule } from './app-routing.module';

/* app modules */
import { TodoListModule } from './todoList/todo-list.module';
import { TodoSideModule } from './todoSide/todo-side.module';
import { TodoAddModule } from './todoAdd/todo-add.module';

/* app services */
import { NavService } from '../services/navService/nav.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    TodoListModule,
    TodoSideModule,
    TodoAddModule
  ],
  exports: [],
  providers: [ NavService ],
  bootstrap: [AppComponent]
})
export class AppModule { }