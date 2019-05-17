import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimsuitsClothingPage } from './swimsuits-clothing.page';

describe('SwimsuitsClothingPage', () => {
  let component: SwimsuitsClothingPage;
  let fixture: ComponentFixture<SwimsuitsClothingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimsuitsClothingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimsuitsClothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
