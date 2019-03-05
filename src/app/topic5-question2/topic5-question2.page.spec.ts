import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic5Question2Page } from './topic5-question2.page';

describe('Topic5Question2Page', () => {
  let component: Topic5Question2Page;
  let fixture: ComponentFixture<Topic5Question2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic5Question2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic5Question2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
