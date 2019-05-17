import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitsBlazerPage } from './suits-blazer.page';

describe('SuitsBlazerPage', () => {
  let component: SuitsBlazerPage;
  let fixture: ComponentFixture<SuitsBlazerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitsBlazerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitsBlazerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
