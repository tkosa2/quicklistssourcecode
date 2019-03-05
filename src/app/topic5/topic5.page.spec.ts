import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic5Page } from './topic5.page';

describe('Topic5Page', () => {
  let component: Topic5Page;
  let fixture: ComponentFixture<Topic5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
