import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(public router: Router,
    public navCtrl: NavController
){

}

fullOutfits() {
  this.router.navigateByUrl('/full-outfits')
}
outfitsMinus1() {
  this.router.navigateByUrl('/outfits-minus1')
}
outfitsMinus2() {
  this.router.navigateByUrl('/outfits-minus2')
}

}