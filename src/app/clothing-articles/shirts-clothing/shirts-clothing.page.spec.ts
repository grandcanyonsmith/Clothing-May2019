import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtsClothingPage } from './shirts-clothing.page';

describe('ShirtsClothingPage', () => {
  let component: ShirtsClothingPage;
  let fixture: ComponentFixture<ShirtsClothingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtsClothingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtsClothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
