import { TODOS } from './mocks';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
    getTodos(){
        return TODOS;
    }
}