import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitsClothingPage } from './suits-clothing.page';

describe('SuitsClothingPage', () => {
  let component: SuitsClothingPage;
  let fixture: ComponentFixture<SuitsClothingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitsClothingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitsClothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
