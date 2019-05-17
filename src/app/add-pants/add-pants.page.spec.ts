import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPantsPage } from './add-pants.page';

describe('AddPantsPage', () => {
  let component: AddPantsPage;
  let fixture: ComponentFixture<AddPantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPantsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
