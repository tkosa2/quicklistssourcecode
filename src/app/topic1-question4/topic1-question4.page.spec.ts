import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic1Question4Page } from './topic1-question4.page';

describe('Topic1Question4Page', () => {
  let component: Topic1Question4Page;
  let fixture: ComponentFixture<Topic1Question4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic1Question4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic1Question4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
