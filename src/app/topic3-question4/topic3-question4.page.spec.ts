import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic3Question4Page } from './topic3-question4.page';

describe('Topic3Question4Page', () => {
  let component: Topic3Question4Page;
  let fixture: ComponentFixture<Topic3Question4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic3Question4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic3Question4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
