import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent {
    items = [{
        title: 'Home',
        url: '/'
    },{
        title: 'Add',
        url: '/add'
    },{
        title: 'Reset',
        url: '/reset'
    }];
}