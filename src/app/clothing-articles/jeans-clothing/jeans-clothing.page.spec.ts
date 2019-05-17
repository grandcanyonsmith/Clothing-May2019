import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeansClothingPage } from './jeans-clothing.page';

describe('JeansClothingPage', () => {
  let component: JeansClothingPage;
  let fixture: ComponentFixture<JeansClothingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeansClothingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeansClothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
