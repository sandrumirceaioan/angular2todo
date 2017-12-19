import { Component, OnInit } from '@angular/core';
import { NavService } from '../../../../services/navService/nav.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.setLink("/list");
  }

}
