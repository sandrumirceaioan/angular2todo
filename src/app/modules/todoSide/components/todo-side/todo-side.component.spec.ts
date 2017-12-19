import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSideComponent } from './todo-side.component';

describe('TodoSideComponent', () => {
  let component: TodoSideComponent;
  let fixture: ComponentFixture<TodoSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
