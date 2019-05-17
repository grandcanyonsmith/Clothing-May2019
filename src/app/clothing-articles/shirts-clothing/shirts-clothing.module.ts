import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
// import { HttpClient} from '@angular/common/http'


import { IonicModule } from '@ionic/angular';

import { ShirtsClothingPage } from './shirts-clothing.page';

const routes: Routes = [
  {
    path: '',
    component: ShirtsClothingPage
  }
];

@NgModule({
  imports: [
    // CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShirtsClothingPage]
})
export class ShirtsClothingPageModule {}
