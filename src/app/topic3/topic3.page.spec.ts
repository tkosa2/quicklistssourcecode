import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic3Page } from './topic3.page';

describe('Topic3Page', () => {
  let component: Topic3Page;
  let fixture: ComponentFixture<Topic3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
