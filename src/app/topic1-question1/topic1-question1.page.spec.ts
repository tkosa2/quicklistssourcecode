import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic1Question1Page } from './topic1-question1.page';

describe('Topic1Question1Page', () => {
  let component: Topic1Question1Page;
  let fixture: ComponentFixture<Topic1Question1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic1Question1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic1Question1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
