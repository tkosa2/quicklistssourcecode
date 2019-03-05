import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic5Question1Page } from './topic5-question1.page';

describe('Topic5Question1Page', () => {
  let component: Topic5Question1Page;
  let fixture: ComponentFixture<Topic5Question1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic5Question1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic5Question1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
