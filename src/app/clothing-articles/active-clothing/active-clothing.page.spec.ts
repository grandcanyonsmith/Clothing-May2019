import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveClothingPage } from './active-clothing.page';

describe('ActiveClothingPage', () => {
  let component: ActiveClothingPage;
  let fixture: ComponentFixture<ActiveClothingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveClothingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveClothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
