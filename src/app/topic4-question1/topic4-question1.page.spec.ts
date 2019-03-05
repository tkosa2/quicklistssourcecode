import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic4Question1Page } from './topic4-question1.page';

describe('Topic4Question1Page', () => {
  let component: Topic4Question1Page;
  let fixture: ComponentFixture<Topic4Question1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic4Question1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic4Question1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
