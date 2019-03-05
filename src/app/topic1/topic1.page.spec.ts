import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic1Page } from './topic1.page';

describe('Topic1Page', () => {
  let component: Topic1Page;
  let fixture: ComponentFixture<Topic1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
