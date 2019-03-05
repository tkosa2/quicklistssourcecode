import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic2Question4Page } from './topic2-question4.page';

describe('Topic2Question4Page', () => {
  let component: Topic2Question4Page;
  let fixture: ComponentFixture<Topic2Question4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic2Question4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic2Question4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
