import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic3Question1Page } from './topic3-question1.page';

describe('Topic3Question1Page', () => {
  let component: Topic3Question1Page;
  let fixture: ComponentFixture<Topic3Question1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic3Question1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic3Question1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
