import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin-services.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  adminService: any;
  message!:String;
  show:Boolean = false;

  constructor(private addCategory :AdminService) { }

  ngOnInit(): void {
  }

  CatForm = new FormGroup({         // Category Form Group
    category : new FormControl('',[Validators.required])
   })

  

   // Function for ADD Category
 add(){
  let key = this.CatForm.value.category;
  const postBody = {
    categoryName : this.CatForm.value.category
  } 
  
  return this.addCategory.AddCategory(postBody).subscribe(res=>{
    console.log(res);
    this.CatForm.reset();
    this.show = true;
    this.message="Successfully Added";
    
    
    setTimeout(() => this.message = "", 500);

    // this. showCategory();
  },(er)=>{console.log(er)})
}
 
}
