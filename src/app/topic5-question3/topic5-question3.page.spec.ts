import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic5Question3Page } from './topic5-question3.page';

describe('Topic5Question3Page', () => {
  let component: Topic5Question3Page;
  let fixture: ComponentFixture<Topic5Question3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic5Question3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic5Question3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
