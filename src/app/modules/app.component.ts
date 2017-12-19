import { Component, OnInit } from '@angular/core';
import { NavService } from '../services/navService/nav.service';

@Component({
    selector: 'todo-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private navService: NavService){ }

    ngOnInit() {}


}