import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.page.html',
  styleUrls: ['./clothing.page.scss'],
})
export class ClothingPage {

  constructor(public router: Router,
    public navCtrl: NavController,) { }


  openClothingShirts() {
    this.router.navigateByUrl('/shirts-clothing')
    }
    
  openActive() {
    this.router.navigateByUrl('/active-clothing')  
    }
  openJeans() {
    this.router.navigateByUrl('/jeans-clothing')  
    }
  openHoodies() {
    this.router.navigateByUrl('/hoodies-clothing')
    }
  openTShirts() {
    this.router.navigateByUrl('/t-shirts-clothing')
  }
  openSuits() {
    this.router.navigateByUrl('/suits-clothing')
    }
  openTanktops() {
    this.router.navigateByUrl('/tanktops-clothing')
    }
  openSocks() {
    this.router.navigateByUrl('/socksclothing')
    }
  openSweaters() {
    this.router.navigateByUrl('/sweaters-clothing')
    }
  openJackets() {
    this.router.navigateByUrl('/jackets-clothing')
    }
  openSwimsuits() {
    this.router.navigateByUrl('/swimsuits-clothing')
    }
  openPants() {
    this.router.navigateByUrl('/pants-clothing')
    }
 
}
