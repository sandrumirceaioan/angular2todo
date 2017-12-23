import { Component, OnInit } from '@angular/core';
import { NavService } from '../services/navService/nav.service';

@Component({
    selector: 'todo-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    path: any;
    icon: string;
      constructor(private navService: NavService) { }

    ngOnInit() {
    }

    getPath(){
        this.path = this.navService.getPath();
        this.icon = this.path == '/list' ? 'fa fa-chevron-left' : 'fa fa-plus';
        return this.path;
    }
}