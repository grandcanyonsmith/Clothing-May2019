import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJacketsPage } from './add-jackets.page';

describe('AddJacketsPage', () => {
  let component: AddJacketsPage;
  let fixture: ComponentFixture<AddJacketsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJacketsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJacketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
