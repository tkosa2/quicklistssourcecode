import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic4Question2Page } from './topic4-question2.page';

describe('Topic4Question2Page', () => {
  let component: Topic4Question2Page;
  let fixture: ComponentFixture<Topic4Question2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic4Question2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic4Question2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
