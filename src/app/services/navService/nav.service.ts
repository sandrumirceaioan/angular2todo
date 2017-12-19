import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
    link: String;
    icon: String;
    constructor(){ }

    setLink(link): void {
        this.link = link;
        this.icon = link == '/list' ? 'fa fa-chevron-left' : 'fa fa-plus';
    }
}