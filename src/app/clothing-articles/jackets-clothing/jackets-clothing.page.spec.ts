import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JacketsClothingPage } from './jackets-clothing.page';

describe('JacketsClothingPage', () => {
  let component: JacketsClothingPage;
  let fixture: ComponentFixture<JacketsClothingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JacketsClothingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JacketsClothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
