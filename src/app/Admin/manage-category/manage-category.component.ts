import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin-services.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from 'src/app/category';


@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {

  constructor(private manageServices:AdminService) { }

  ngOnInit(): void {
    this.getCategory();
  
  }
    
 showCategory:any =[] 
  getCategory(){
    this.manageServices.getCategory().subscribe(res=>{console.log(res); this.showCategory = res},(error)=>{console.log(error)})
  }

  CatForm = new FormGroup({         // Category Form Group
    categoryName : new FormControl()
   })


  // ************ EDIT METHOD ***********
 
  public ID!:Number;
  editRow(pro:any){

   console.log("Enter in EditRow", pro)
   this.ID = pro.id;
   this.CatForm.controls['categoryName'].setValue(pro.categoryName);

  }

  objCategory:Category = new Category;
  updateCategory(){
     
     this.objCategory.categoryName = this.CatForm.value.categoryName;
     this.objCategory.id = this.ID;
        
 this.manageServices.updateCategory(this.objCategory.id,this.objCategory).subscribe(res=>{
   console.log(res);
   let ref = document.getElementById('cancel')
     ref?.click();
     this.CatForm.reset();
     this.getCategory();
  
 },(error)=>{
   console.log(error);
 })
  
}



  
  deleteRow(category:Number){
    console.log("Form Delete row",category)
    this.manageServices.deleteCategory(category).subscribe(res=>{
     console.log('Category delete with id '+category);
     this.ngOnInit();

    
    })
  }

}
