import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/products';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

 

  constructor(private router : Router, private productServices:ProductService, private cartServices:CartService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  show(){
    alert('button click');
    this.router.navigate(['login']);
  }

Products:any =[]
  getProduct(){
    this.productServices.getProduct().subscribe(res=>{console.log(res)
     this.Products = res;
  },(eror)=>{console.log(eror)})
  }

  ViewDetails(item:any){
       console.log(item.id)
       this.router.navigate([`USER/viewDetails/${item.id}`])
  }
  addToCart(item:Products){
    item.Quantity=1;
     this.cartServices.addToCartServices(item).subscribe(res=>{console.log(res);},(er)=>{console.log(er)})
     
  }
 

}
