import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmOrderAddressComponent } from './confirm-order-address/confirm-order-address.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginpageGuard } from './loginpage.guard';
import { OrderDetComponent } from './order-det/order-det.component';
import { ProductDetComponent } from './product-det/product-det.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UserpageGuard } from './userpage.guard';

const routes: Routes =
 [
  {path : '',component : HomeComponent},
  {path : 'about',component : AboutComponent},
  {path : 'contact',component : ContactComponent},
  {path : 'register',component : RegisterComponent,canActivate:[LoginpageGuard]},
  {path : 'login',component : LoginComponent,canActivate:[LoginpageGuard]},
  {path : 'products/:cat_id',component : ProductsComponent},
  {path : 'product_det/:product_id',component :ProductDetComponent},
  {path : 'cart',component : CartComponent},
  {path : 'confirm_order',component :ConfirmOrderAddressComponent},
  {path : 'order_det/:order_id',component :OrderDetComponent},

  // ,canActivate:[UserpageGuard]


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
