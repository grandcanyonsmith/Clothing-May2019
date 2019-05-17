import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitsMinus2Page } from './outfits-minus2.page';

describe('OutfitsMinus2Page', () => {
  let component: OutfitsMinus2Page;
  let fixture: ComponentFixture<OutfitsMinus2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutfitsMinus2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitsMinus2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
