import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.page.html',
  styleUrls: ['./user-forms.page.scss'],
})
export class UserFormsPage implements OnInit {
  name: any;
  lastName: any;
  number: any;
  description: any

  constructor(
    public router: Router,
    private location: Location
  ) { }


  ngOnInit() {}

  
  async setData() {
    //check user FirstName is checked
    if(this.name){
     let newEntry = {
      name: this.name,
      lastName: this.lastName,
      number: this.number,
      description: this.description
    }
    let list: Array<any> = JSON.parse(window.localStorage.getItem('list'))
    if (!list) {
      list = [];
    }
    list.push(newEntry)
    //set localStorage in userData
    await window.localStorage.setItem('list', JSON.stringify(list))

    this.router.navigate(["/folder/Inbox"]);
  }else{
    alert("please Enter the Name");
  }
  }
  gotoBack() {
    this.location.back();
  }
}
