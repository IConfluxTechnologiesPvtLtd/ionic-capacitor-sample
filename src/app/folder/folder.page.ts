import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public list:Array<any>;

  constructor(
    public router: Router,
    ) { }

 ngOnInit() {
   
  }
  async ionViewWillEnter(){
    //get userData from localstorage
    this.list = await JSON.parse(window.localStorage.getItem('list'))
    console.log("getDAta",this.list)
  }
  openForm(){
    this.router.navigate(["/user-forms"]);
  }

}
