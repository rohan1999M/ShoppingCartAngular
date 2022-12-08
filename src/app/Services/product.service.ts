
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Products } from '../products';


// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   constructor(private http:HttpClient) { }

//   addProduct(body:Products){
//    
//     return this.http.post('http://localhost:3000/Products/',body);
//   }
//   
//   getProduct(){
//     return this.http.get('http://localhost:3000/Products');
//   }

// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(body:Products){
   
    return this.http.post('http://localhost:3000/Products/',body);
  }
  
  getProduct(){
    return this.http.get('http://localhost:3000/Products');
  }
  
   // ******* UPDATE METHOD *********
   
   updateProduct(id:any,data:Products){
    // return this.http.put<EmpModel>('http://localhost:8080/api/updateemployee/'+ id,data)
    return this.http.put('http://localhost:3000/Products/'+id,data)
  }
  
  // ******* DELETE METHOD *********
   
  deleteProduct(id:any){
    console.log(id)
  //  return  this.http.delete<EmpModel>('http://localhost:8080/api/deleteemployee/'+id)
  return this.http.delete('http://localhost:3000/Products/'+id)
  
  }

}
