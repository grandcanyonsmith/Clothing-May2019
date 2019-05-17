import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodiesClothingPage } from './hoodies-clothing.page';

describe('HoodiesClothingPage', () => {
  let component: HoodiesClothingPage;
  let fixture: ComponentFixture<HoodiesClothingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoodiesClothingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoodiesClothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
