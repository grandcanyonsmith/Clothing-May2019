import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SofasAndCouchesPage } from './sofas-and-couches.page';

describe('SofasAndCouchesPage', () => {
  let component: SofasAndCouchesPage;
  let fixture: ComponentFixture<SofasAndCouchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofasAndCouchesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofasAndCouchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
