import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-suits-clothing',
  templateUrl: './suits-clothing.page.html',
  styleUrls: ['./suits-clothing.page.scss'],
})
export class SuitsClothingPage {

  constructor(public router: Router,
    public navCtrl: NavController,) { }


  openSuitsBlazer() {
    this.router.navigateByUrl('/suits-blazer')
  }
  openSuitsTuxedo() {
    this.router.navigateByUrl('/suits-tux')
  }
  openSuitsSuit() {
    this.router.navigateByUrl('/suits-suit')
  }
  openSuitsVest() {
    this.router.navigateByUrl('/suits-vest')
  }

}
