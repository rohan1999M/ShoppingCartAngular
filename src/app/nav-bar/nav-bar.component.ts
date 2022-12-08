import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin-services.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.showCategory();
  }

  Category:any= []
  showCategory(){
    this.adminService.getCategory().subscribe(res=>{
      // console.log(res);
    
      this.Category = res;
      console.log("From Category",this.Category)
    },(error)=>{console.log(error)})
  }

  categoryClick(){

  }
}
