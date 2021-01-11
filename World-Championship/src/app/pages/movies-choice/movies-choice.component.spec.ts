import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesChoiceComponent } from './movies-choice.component';

describe('MoviesChoiceComponent', () => {
  let component: MoviesChoiceComponent;
  let fixture: ComponentFixture<MoviesChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
