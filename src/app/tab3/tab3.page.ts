import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
    public navCtrl: NavController
){

}

btnClicked(){
console.log("btn clicked")
this.router.navigateByUrl('')
}
 openAddShirt() {
  this.router.navigateByUrl('/add-shirt')
 }
 addJackets() {
  this.router.navigateByUrl('/add-jackets')
 }
 addPants() {
  this.router.navigateByUrl('/add-pants')
 }
 addShoes() {
  this.router.navigateByUrl('/add-shoes')
 }
 addSweater() {
  this.router.navigateByUrl('/add-sweater')
 }

}
