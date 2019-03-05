import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic2Question1Page } from './topic2-question1.page';

describe('Topic2Question1Page', () => {
  let component: Topic2Question1Page;
  let fixture: ComponentFixture<Topic2Question1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic2Question1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic2Question1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
