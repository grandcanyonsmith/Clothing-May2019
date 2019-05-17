import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocksclothingPage } from './socksclothing.page';

describe('SocksclothingPage', () => {
  let component: SocksclothingPage;
  let fixture: ComponentFixture<SocksclothingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocksclothingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocksclothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
