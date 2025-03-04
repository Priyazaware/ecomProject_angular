import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit
{
  cart_data:any;
  loading:any =true;

 constructor(private api:ApiService){}

 ngOnInit()
 {
  this.api.cart_list().subscribe(res=>{
    console.log(res);
    this.cart_data=res;
    this.loading=false;
  })
 }

 incqty(product_econ_cart_id:any)
 {
  this.api.inc_cart_qty(product_econ_cart_id).subscribe(res=>{
    console.log(res);
    this.ngOnInit();
  })
 }

 decqty(product_econ_cart_id:any)
 {
  this.api.dec_cart_qty(product_econ_cart_id).subscribe(res=>{
    console.log(res);
    this.ngOnInit();
  })
 }

 removeProduct(product_econ_cart_id:any)
 {
  this.api.remove_cart_qty(product_econ_cart_id).subscribe(res=>{
    console.log(res);
    this.api.fetch_cart_count();
    this.ngOnInit();

 })
}

calculateTotalPrice(): number {
  if (!this.cart_data) return 0; // Handle case where cart_data is undefined

  return this.cart_data.reduce((total: number, item: any) => total + (item.price * item.qty), 0);
}

}
