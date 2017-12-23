import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavService {
    path: any;
    constructor(private route: Router){
    }

    getPath(){
        return this.route.url == '/list' ? '/add' : '/list';
    }
}