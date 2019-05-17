import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitsMinus1Page } from './outfits-minus1.page';

describe('OutfitsMinus1Page', () => {
  let component: OutfitsMinus1Page;
  let fixture: ComponentFixture<OutfitsMinus1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutfitsMinus1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitsMinus1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
