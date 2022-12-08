import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
 Msg!:string;
  show:Boolean = false
message(){
 this.show = true
  this.Msg= "your Orders has been places. ";
 setTimeout(() =>this.Msg = '', 1000);
}

}
