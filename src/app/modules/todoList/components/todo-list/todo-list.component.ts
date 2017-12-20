import { Component, OnInit } from '@angular/core';
import { NavService } from '../../../../services/navService/nav.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    private path: any;
    constructor(private navService: NavService) { }

    ngOnInit() {
      this.navService.getPath();
    }

}
