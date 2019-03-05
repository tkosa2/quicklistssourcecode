import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic3Question2Page } from './topic3-question2.page';

describe('Topic3Question2Page', () => {
  let component: Topic3Question2Page;
  let fixture: ComponentFixture<Topic3Question2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic3Question2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic3Question2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
