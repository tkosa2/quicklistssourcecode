import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic4Question5Page } from './topic4-question5.page';

describe('Topic4Question5Page', () => {
  let component: Topic4Question5Page;
  let fixture: ComponentFixture<Topic4Question5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic4Question5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic4Question5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
