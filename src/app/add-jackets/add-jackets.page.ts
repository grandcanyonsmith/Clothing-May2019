import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-add-jackets',
  templateUrl: './add-jackets.page.html',
  styleUrls: ['./add-jackets.page.scss'],
})
export class AddJacketsPage {

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
sumbitClothing(){
  
}

}

