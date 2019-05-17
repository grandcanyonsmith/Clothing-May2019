import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitecturePage } from './architecture.page';

describe('ArchitecturePage', () => {
  let component: ArchitecturePage;
  let fixture: ComponentFixture<ArchitecturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitecturePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitecturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
