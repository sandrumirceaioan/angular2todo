/* app browser module and main app module */
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

/* app services  */
import { TodoService } from '../app/components/todos/todos.service';

/* app components */
import { ContainerComponent } from '../app/layout/container/container.component';
import { HeaderComponent } from '../app/layout/header/header.component';
import { NavComponent } from '../app/layout/nav/nav.component';
import { ContentComponent } from '../app/layout/content/content.component';
import { SectionComponent } from '../app/components/section/section.component';
import { SidebarComponent } from '../app/layout/sidebar/sidebar.component';
import { WidgetComponent } from '../app/components/widget/widget.component';
import { ToDoListComponent } from '../app/components/todos/todos.component';

@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent,
    NavComponent,
    ContentComponent,
    SectionComponent,
    SidebarComponent,
    WidgetComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
