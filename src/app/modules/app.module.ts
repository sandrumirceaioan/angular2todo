/* app browser module and main app module */
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

/* app services  */
import { TodoService } from '../../app/services/todoService/todo.service';

/* app components */
import { AppComponent } from '../../app/modules/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
