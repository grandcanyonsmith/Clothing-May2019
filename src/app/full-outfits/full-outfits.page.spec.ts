import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullOutfitsPage } from './full-outfits.page';

describe('FullOutfitsPage', () => {
  let component: FullOutfitsPage;
  let fixture: ComponentFixture<FullOutfitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullOutfitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullOutfitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
