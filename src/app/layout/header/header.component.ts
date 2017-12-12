import { Component } from '@angular/core';
import { HeaderMessages } from './header.messages';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  messages = HeaderMessages;
  message = 'Default message shown here!';
  color:string = '';
  ngOnInit() {
    setInterval(() => { 
      this.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
      this.message = this.messages[Math.round(Math.random() * 4) + 0];
    }, 2000);
  }
}
