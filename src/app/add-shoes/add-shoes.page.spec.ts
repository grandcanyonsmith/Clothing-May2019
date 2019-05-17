import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoesPage } from './add-shoes.page';

describe('AddShoesPage', () => {
  let component: AddShoesPage;
  let fixture: ComponentFixture<AddShoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
