import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic1Question2Page } from './topic1-question2.page';

describe('Topic1Question2Page', () => {
  let component: Topic1Question2Page;
  let fixture: ComponentFixture<Topic1Question2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic1Question2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic1Question2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
