import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSweaterPage } from './add-sweater.page';

describe('AddSweaterPage', () => {
  let component: AddSweaterPage;
  let fixture: ComponentFixture<AddSweaterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSweaterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSweaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
