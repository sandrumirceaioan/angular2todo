import { Component } from '@angular/core';

@Component({
    selector: 'sidebar-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.css']
})
export class WidgetComponent{
    title: string;
    text: string;
}