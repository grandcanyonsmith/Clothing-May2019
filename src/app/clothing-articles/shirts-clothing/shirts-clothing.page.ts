import { Component, OnInit } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-shirts-clothing',
  templateUrl: './shirts-clothing.page.html',
  styleUrls: ['./shirts-clothing.page.scss'],
})
export class ShirtsClothingPage implements OnInit {

  constructor(public http: HttpClient, public router: Router ) { }
  selectedFile: File= null;

  onFileSelected(event) {
    this.selectedFile= <File>event.target.files[0]
  }


  ngOnInit() {
    
  }
  // onUpload() {
  //   var fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   this.http.post('https://api.cloudinary.com/v1_1/grandcanyon/image/upload', this.selectedFile)
  //     .subscribe(res => {
  //       console.log(res)
  //     })
  //   //  alert("this posted")
  // }
  // openPants() {
  //   this.router.navigateByUrl('/jeans-clothing')  
  //   }

}

