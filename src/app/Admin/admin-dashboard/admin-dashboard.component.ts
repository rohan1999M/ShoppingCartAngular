
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

import { ProductService } from 'src/app/Services/product.service';
import { Products } from '../../products';
import { AdminService } from '../../Services/admin-services.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  categoryArray:any = []

  objProduct = new Products;
  constructor(private adminService:AdminService, private productServices:ProductService) { }
  
  ngOnInit(): void {           // Component lifeCycle method
    this. showCategory();
    this.showProducts();
    // this.updateProducts();
    
  }
//  CatForm = new FormGroup({         // Category Form Group
//   category : new FormControl()
//  })

 ProductForm = new FormGroup({        // ProductForm Group
  productName: new FormControl(),
  description:new FormControl(),
  category : new FormControl(),
  price:new FormControl(),
 })


//  // Function for ADD Category
//  add(){
//     let key = this.CatForm.value.category;
//     const postBody = {
//       categoryName : this.CatForm.value.category
//     } 
    
//     return this.adminService.AddCategory(postBody).subscribe(res=>{
//       console.log(res);
//       this. showCategory();
//     },(er)=>{console.log(er)})
//  }

 //Function Show Category
 showCategory(){
  return this.adminService.getCategory().subscribe(res=>{
    // console.log(res); 
    this.categoryArray = res;
  },(er)=>{console.log(er)})
 }


 addPorduct(){

    let  category =this.ProductForm.value.category;

       this.objProduct.productName = this.ProductForm.value.productName;
       this.objProduct.description = this.ProductForm.value.description;
       this.objProduct.category = this.ProductForm.value.category;
       this.objProduct.price = this.ProductForm.value.price;
       this.objProduct.productPrice = this.ProductForm.value.price;


      
      
    //  console.log(category)
     return this.productServices.addProduct(this.objProduct).subscribe(res=>{console.log(res);},(er)=>{console.log(er)})

 }

 ProductArray :any =[]  // Storing Production in this ARRAY from ShowProduct function.

 showProducts(){       // Show Product function
   
  return this.productServices.getProduct().subscribe(res=>{
    // console.log(res);
    this.ProductArray=res;   // adding data into array.
    console.log("From Product Array",this.ProductArray)

  },(error)=>{
    console.log(error);
    
  })
  
 }

  // ************* DELETE METHOD ***************

  deleteRow(pro:any){
    console.log("Form Delete row",pro)
    this.productServices.deleteProduct(pro).subscribe(res=>{
     console.log('Product delete with id '+ pro.id);
     this.showProducts();
    //  this.getEmployee();
    })
  }

  // ************ EDIT METHOD ***********
 
public ID!:Number;
 editRow(pro:any){
  console.log("Enter in EditRow", pro)
   
    this.ID = pro.id;
   
  this.ProductForm.controls['productName'].setValue(pro.productName);
  this.ProductForm.controls['description'].setValue(pro.description);
  this.ProductForm.controls['category'].setValue(pro.category);
  this.ProductForm.controls['price'].setValue(pro.price);
  
  // this.FormDetail.controls['image'].setValue(emp.image) 
 }

 showButton:boolean = true; // Displaying of button when update function click


 updateProducts(){
 
  
 
  this.objProduct.id = this.ID;
  console.log("Product Update",this.objProduct.id)
  this.objProduct.productName = this.ProductForm.value.productName;
  this.objProduct.description = this.ProductForm.value.description;
  this.objProduct.category = this.ProductForm.value.category;
  this.objProduct.price = this.ProductForm.value.price;
  this.objProduct.productPrice = this.ProductForm.value.price;

  // this.showAddButton = false;
console.log(this.objProduct)
this.productServices.updateProduct(this.ID,this.objProduct).subscribe(res=>{
  console.log(res);
  let ref = document.getElementById('cancel')
    ref?.click();
    this.ProductForm.reset();
    this.showProducts();
    // this.getEmployee();
},(error)=>{
  console.log(error);
})
 }


}































