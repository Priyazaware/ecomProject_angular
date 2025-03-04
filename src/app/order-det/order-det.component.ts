import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-order-det',
  templateUrl: './order-det.component.html',
  styleUrls: ['./order-det.component.scss']
})
export class OrderDetComponent implements OnInit
{
  orderinfo:any;
  orderproducts:any;
  constructor(private activatedroute:ActivatedRoute,private api:ApiService){}
  ngOnInit()
  {
    this.activatedroute.params.subscribe((res:any)=>
      {
        this.api.order_det(res.order_id).subscribe((res2:any)=>
        {
          console.log(res2);
          this.orderinfo=res2.order_det[0];
          this.orderproducts=res2.order_products;
        });
      });
  }
 
}
