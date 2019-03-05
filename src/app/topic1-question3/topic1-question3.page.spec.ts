import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic1Question3Page } from './topic1-question3.page';

describe('Topic1Question3Page', () => {
  let component: Topic1Question3Page;
  let fixture: ComponentFixture<Topic1Question3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic1Question3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic1Question3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
