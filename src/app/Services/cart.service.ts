import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../products';
// import { BehaviorSubject } from 'rxjs';
// import { Products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any = []
   constructor(private http:HttpClient) { }
  // public productList = new BehaviorSubject<any>([])
  // constructor() { }
  // getProduct(){
  //   return this.productList.asObservable();
  // }

  // setProduct(product:any){
  //   this.cartItemList.push(...product)
  //   this.productList.next(product);
  // }

  // addToCart(product:Products){
  //   this.cartItemList.push(product)
  //   this.productList.next(this.cartItemList);
  //   this.getTotal();
  // }

  // getTotal(){
  //   let grandTotal = 0;
  //   this.cartItemList.map((a:any)=>{
  //     grandTotal += a.price
  //   })
  // }
   
  addToCartServices(body:Products){
    return this.http.post('http://localhost:3000/Cart',body);
  }
  getFromCart(){
    return this.http.get<Products[]>('http://localhost:3000/Cart');
  }
  updateCart (id:Number , body:Products){
    return this.http.put('http://localhost:3000/Cart/'+id , body)
  }

  deleteCart(id:Number){
    return this.http.delete('http://localhost:3000/Cart/'+id)
  }


}
