import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitsVestPage } from './suits-vest.page';

describe('SuitsVestPage', () => {
  let component: SuitsVestPage;
  let fixture: ComponentFixture<SuitsVestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitsVestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitsVestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
