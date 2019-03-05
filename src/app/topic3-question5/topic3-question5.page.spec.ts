import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic3Question5Page } from './topic3-question5.page';

describe('Topic3Question5Page', () => {
  let component: Topic3Question5Page;
  let fixture: ComponentFixture<Topic3Question5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic3Question5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic3Question5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
