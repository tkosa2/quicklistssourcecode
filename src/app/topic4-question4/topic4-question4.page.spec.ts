import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic4Question4Page } from './topic4-question4.page';

describe('Topic4Question4Page', () => {
  let component: Topic4Question4Page;
  let fixture: ComponentFixture<Topic4Question4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic4Question4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic4Question4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
