import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-home-and-garden',
  templateUrl: './home-and-garden.page.html',
  styleUrls: ['./home-and-garden.page.scss'],
})
export class HomeAndGardenPage {

  constructor(
    public router: Router,
    public navCtrl: NavController,
  ) { 
    
  }
  openSofasAndCouches() {
    this.router.navigateByUrl('/sofas-and-couches')
    }
}
