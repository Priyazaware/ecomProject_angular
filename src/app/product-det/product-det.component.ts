import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-det',
  templateUrl: './product-det.component.html',
  styleUrls: ['./product-det.component.scss']
})
export class ProductDetComponent implements OnInit
{
  product_info:any;
  pid:any;
  constructor(private activatedroute:ActivatedRoute,private api:ApiService,private router:Router)
  {}

ngOnInit()
{
  this.activatedroute.params.subscribe((res:any)=>{
      console.log(res);
      this.pid=res.product_id;

      this.api.product_by_id(this.pid).subscribe((res:any)=>
      {
        console.log(res);
        this.product_info=res;
      });

    });
}

  addcart()
  {
    if(localStorage.getItem('token'))
    {
    this.api.addtocart(this.pid).subscribe((res:any)=>{
      this.api.fetch_cart_count();
      this.ngOnInit();
    });
  }
  else
  {
    this.router.navigate(['/login']);
  }
  }

}
