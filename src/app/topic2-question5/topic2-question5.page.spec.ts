import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic2Question5Page } from './topic2-question5.page';

describe('Topic2Question5Page', () => {
  let component: Topic2Question5Page;
  let fixture: ComponentFixture<Topic2Question5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic2Question5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic2Question5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
