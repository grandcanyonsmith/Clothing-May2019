import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'clothing-and-accessories',
  templateUrl: './clothing-and-accessories.page.html',
  styleUrls: ['./clothing-and-accessories.page.scss'],
})
export class ClothingAndAccessoriesPage  {

  constructor(public router: Router,
    public navCtrl: NavController,
    // public platform: Platform,
    // public actionsheetCtrl: ActionSheetController
){

}

btnClicked(){
console.log("btn clicked")
this.router.navigateByUrl('')
}

openMenu() {
this.router.navigateByUrl('/app-tab2')
}

  openClothing() {
    this.router.navigateByUrl('/clothing')
    }
  openBeauty() {
    this.router.navigateByUrl('/beauty')
    }
  openFoodAndRecipes() {
    this.router.navigateByUrl('/food-and-recipes')
    }
  openArchitecture() {
    this.router.navigateByUrl('/architecture')
    }
  openHomeAndGarden() {
    this.router.navigateByUrl('/home-and-garden')
    }
}
