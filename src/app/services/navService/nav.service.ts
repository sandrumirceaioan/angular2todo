import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavService {
    path: any;
    constructor(private route: Router){
    }

    getPath(){
        this.path = this.route.url;
        console.log(this.path);
    }
}