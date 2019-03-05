import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic2Question3Page } from './topic2-question3.page';

describe('Topic2Question3Page', () => {
  let component: Topic2Question3Page;
  let fixture: ComponentFixture<Topic2Question3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic2Question3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic2Question3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
