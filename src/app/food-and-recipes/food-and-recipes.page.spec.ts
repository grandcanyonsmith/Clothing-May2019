import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAndRecipesPage } from './food-and-recipes.page';

describe('FoodAndRecipesPage', () => {
  let component: FoodAndRecipesPage;
  let fixture: ComponentFixture<FoodAndRecipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAndRecipesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAndRecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
