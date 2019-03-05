import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic4Question3Page } from './topic4-question3.page';

describe('Topic4Question3Page', () => {
  let component: Topic4Question3Page;
  let fixture: ComponentFixture<Topic4Question3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic4Question3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic4Question3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
