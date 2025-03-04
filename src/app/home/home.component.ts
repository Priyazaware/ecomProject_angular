import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  slider_data:any;
  category_data:any;
  best_seller_products:any;
  loading:any =true;
  constructor(private api:ApiService){}
  ngOnInit()
  {
    this.api.getSliderList().subscribe((res)=>{
      console.log(res);
      this.slider_data=res;
      this.loading=false;

    });

    this.api.getCategoryList().subscribe((res)=>{
      // console.log(res);
      this.category_data=res;
      this.loading=false;


    })

    this.api.getProductList().subscribe((res)=>{
      // console.log(res);
      this.best_seller_products=res;
      this.loading=false;
    })



    
  }
  brandLogos = [
    { img: '/assets/images/brand-1.jpg', alt: 'Brand 1' },
    { img: '/assets/images/brand-2.jpg', alt: 'Brand 2' },
    { img: '/assets/images/brand-3.jpg', alt: 'Brand 3' },
    { img: '/assets/images/brand-4.jpg', alt: 'Brand 4' },
    { img: '/assets/images/brand-5.jpg', alt: 'Brand 5' }
];




}
