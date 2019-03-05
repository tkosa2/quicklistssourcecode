import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic5Question4Page } from './topic5-question4.page';

describe('Topic5Question4Page', () => {
  let component: Topic5Question4Page;
  let fixture: ComponentFixture<Topic5Question4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic5Question4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic5Question4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
