import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShirtPage } from './add-shirt.page';

describe('AddShirtPage', () => {
  let component: AddShirtPage;
  let fixture: ComponentFixture<AddShirtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShirtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShirtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
