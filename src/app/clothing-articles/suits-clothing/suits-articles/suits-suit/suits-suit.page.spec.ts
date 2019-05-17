import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitsSuitPage } from './suits-suit.page';

describe('SuitsSuitPage', () => {
  let component: SuitsSuitPage;
  let fixture: ComponentFixture<SuitsSuitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitsSuitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitsSuitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
