import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Category } from '../category';







@Injectable({

  providedIn: 'root'

})

export class AdminService {

  constructor(private http:HttpClient) { }

  AddCategory (Body:any){

    return this.http.post('http://localhost:3000/Category',Body)

  }

  getCategory(){

    return this.http.get('http://localhost:3000/Category');

  }

    updateCategory(id:Number,data:Category){
 
      return this.http.put('http://localhost:3000/Category/'+id,data)
    }
  
     
    deleteCategory(id:Number){
      console.log(id)
  
    return this.http.delete('http://localhost:3000/Category/'+id)
    
    }
  



  

}