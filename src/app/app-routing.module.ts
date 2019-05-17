import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'app2.page', loadChildren: './tabs2/tabs2.page.module#Tabs2PageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'walkthrough', loadChildren: './walkthrough/walkthrough.module#WalkthroughPageModule' },
  { path: 'landing-page1', loadChildren: './landing-page/landing-page1/landing-page1.module#LandingPage1PageModule' },
  { path: 'landing-page2', loadChildren: './landing-page2/landing-page2.module#LandingPage2PageModule' },
  { path: 'home-and-garden', loadChildren: './home-and-garden/home-and-garden.module#HomeAndGardenPageModule' },
  { path: 'clothing-and-accessories', loadChildren: './clothing-and-accessories/clothing-and-accessories.module#ClothingAndAccessoriesPageModule' },
  { path: 'photo', loadChildren: './photo/photo.module#PhotoPageModule' },
  { path: 'clothing', loadChildren: './clothing/clothing.module#ClothingPageModule' },
  { path: 'beauty', loadChildren: './beauty/beauty.module#BeautyPageModule' },
  { path: 'food-and-recipes', loadChildren: './food-and-recipes/food-and-recipes.module#FoodAndRecipesPageModule' },
  { path: 'architecture', loadChildren: './architecture/architecture.module#ArchitecturePageModule' },
  { path: 'shirts-clothing', loadChildren: './clothing-articles/shirts-clothing/shirts-clothing.module#ShirtsClothingPageModule' },
  { path: 'jeans-clothing', loadChildren: './clothing-articles/jeans-clothing/jeans-clothing.module#JeansClothingPageModule' },
  { path: 'active-clothing', loadChildren: './clothing-articles/active-clothing/active-clothing.module#ActiveClothingPageModule' },
  { path: 'hoodies-clothing', loadChildren: './clothing-articles/hoodies-clothing/hoodies-clothing.module#HoodiesClothingPageModule' },
  { path: 't-shirts-clothing', loadChildren: './clothing-articles/t-shirts-clothing/t-shirts-clothing.module#TShirtsClothingPageModule' },
  { path: 'suits-clothing', loadChildren: './clothing-articles/suits-clothing/suits-clothing.module#SuitsClothingPageModule' },
  { path: 'tanktops-clothing', loadChildren: './clothing-articles/tanktops-clothing/tanktops-clothing.module#TanktopsClothingPageModule' },
  { path: 'socksclothing', loadChildren: './clothing-articles/socksclothing/socksclothing.module#SocksclothingPageModule' },
  { path: 'sweaters-clothing', loadChildren: './clothing-articles/sweaters-clothing/sweaters-clothing.module#SweatersClothingPageModule' },
  { path: 'jackets-clothing', loadChildren: './clothing-articles/jackets-clothing/jackets-clothing.module#JacketsClothingPageModule' },
  { path: 'swimsuits-clothing', loadChildren: './clothing-articles/swimsuits-clothing/swimsuits-clothing.module#SwimsuitsClothingPageModule' },
  { path: 'pants-clothing', loadChildren: './clothing-articles/pants-clothing/pants-clothing.module#PantsClothingPageModule' },
  { path: 'suits-vest', loadChildren: './clothing-articles/suits-clothing/suits-articles/suits-vest/suits-vest.module#SuitsVestPageModule' },
  { path: 'suits-suit', loadChildren: './clothing-articles/suits-clothing/suits-articles/suits-suit/suits-suit.module#SuitsSuitPageModule' },
  { path: 'suits-blazer', loadChildren: './clothing-articles/suits-clothing/suits-articles/suits-blazer/suits-blazer.module#SuitsBlazerPageModule' },
  { path: 'suits-tux', loadChildren: './clothing-articles/suits-clothing/suits-articles/suits-tux/suits-tux.module#SuitsTuxPageModule' },
  { path: 'sofas-and-couches', loadChildren: './home-and-garden/furniture-categories/sofas-and-couches/sofas-and-couches.module#SofasAndCouchesPageModule' },
  { path: 'add-shirt', loadChildren: './add-shirt/add-shirt.module#AddShirtPageModule' },
  { path: 'add-jackets', loadChildren: './add-jackets/add-jackets.module#AddJacketsPageModule' },
  { path: 'add-shoes', loadChildren: './add-shoes/add-shoes.module#AddShoesPageModule' },
  { path: 'add-pants', loadChildren: './add-pants/add-pants.module#AddPantsPageModule' },
  { path: 'add-sweater', loadChildren: './add-sweater/add-sweater.module#AddSweaterPageModule' },
  { path: 'full-outfits', loadChildren: './full-outfits/full-outfits.module#FullOutfitsPageModule' },
  { path: 'outfits-minus1', loadChildren: './outfits-minus1/outfits-minus1.module#OutfitsMinus1PageModule' },
  { path: 'outfits-minus2', loadChildren: './outfits-minus2/outfits-minus2.module#OutfitsMinus2PageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
