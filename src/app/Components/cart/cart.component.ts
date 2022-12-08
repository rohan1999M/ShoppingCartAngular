import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/products';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
// thenBlock: TemplateRef<NgIfContext<boolean>>|null;

  constructor(private cartServices:CartService,  private router :Router) { }
  TotalAmount:Number=0;
  qty:Number=1;
  ngOnInit(): void {
    this.getItem();

  }

  ItemsInCart:Products[] = []
  getItem(){
    this.cartServices.getFromCart().subscribe(res=>{console.log(res);
    this.ItemsInCart =res;
    this.MakeTotal();
    },(error)=>{
      console.log(error)
    })
  }

  deleteItem(id:Number){
    this.cartServices.deleteCart(id).subscribe(res=>{console.log(res); this.getItem()})

  }
 
  updateQuantity(item:Products,operation:String){
if(operation=="+"){
  item.Quantity=  Number(item.Quantity)+1;
  item.productPrice = Number(item.price)* Number(item.Quantity);

  this.cartServices.updateCart(item.id,item).subscribe(res=>{console.log(res);

    },(error)=>{
      console.log(error)
    })
}
else{

  item.Quantity=  Number(item.Quantity)-1;
  item.productPrice=Number(item.price)* Number(item.Quantity);
 
  this.cartServices.updateCart(item.id,item).subscribe(res=>{console.log(res);
    },(error)=>{
      console.log(error)
    })

}
this.ngOnInit();

  }



  MakeTotal(){
    console.log("called");
   this.qty=0;
    this.TotalAmount=0;
    for(let i of this.ItemsInCart){
      this.TotalAmount=Number(this.TotalAmount)+Number(i.productPrice);
      this.qty=Number(this.qty)+Number(i.Quantity);
      console.log(this.TotalAmount)
    } 
  }



   placeOrder(){
           
    this.router.navigate(['/USER/placeOrders'])
   }

}
