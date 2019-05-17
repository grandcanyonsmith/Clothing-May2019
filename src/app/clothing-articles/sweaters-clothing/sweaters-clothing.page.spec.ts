import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweatersClothingPage } from './sweaters-clothing.page';

describe('SweatersClothingPage', () => {
  let component: SweatersClothingPage;
  let fixture: ComponentFixture<SweatersClothingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweatersClothingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweatersClothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
