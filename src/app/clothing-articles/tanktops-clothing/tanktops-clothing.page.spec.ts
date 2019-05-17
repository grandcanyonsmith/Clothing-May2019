import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanktopsClothingPage } from './tanktops-clothing.page';

describe('TanktopsClothingPage', () => {
  let component: TanktopsClothingPage;
  let fixture: ComponentFixture<TanktopsClothingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanktopsClothingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanktopsClothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
