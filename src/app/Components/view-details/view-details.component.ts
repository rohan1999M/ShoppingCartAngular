import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private prouctServices:ProductService) { }

  ngOnInit(): void {
   
  }
    ProductDetails!:any
  getProductByID(id:Number){
    this.prouctServices.getProduct().subscribe(res=>{console.log(res);
    this.ProductDetails = res;
    },(error)=>{console.log(error)})
  }

  AddToCart(){

  }

  productQuantiy:number =1
   handQuantity(val:string){
     if(this.productQuantiy<20 && val==='plus'){
      this.productQuantiy+=1;
     }
     else if(this.productQuantiy>1 && val==='minus'){
      this.productQuantiy-=1;
   }
  }
}
