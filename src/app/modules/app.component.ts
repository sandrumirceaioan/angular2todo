import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'todo-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    path: any;
      constructor() { }

    ngOnInit() {
    }
}