import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtsClothingPage } from './t-shirts-clothing.page';

describe('TShirtsClothingPage', () => {
  let component: TShirtsClothingPage;
  let fixture: ComponentFixture<TShirtsClothingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TShirtsClothingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtsClothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
