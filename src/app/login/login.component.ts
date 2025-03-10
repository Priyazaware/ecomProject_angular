import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent 
{
  loading: boolean = false; 
  constructor(private api:ApiService,private router:Router){}

  loginForm = new FormGroup(
    {
      'user_mobile' : new FormControl(''),
      'user_password' : new FormControl(''),

    });

    loginUser()
    {
      this.api.loginUser(this.loginForm.value).subscribe((res:any)=>{
        console.log(res);
        if(res.status=='success')
        {
          localStorage.setItem('token',res.token);
          this.router.navigate(['/']);
        }
        else
        {
          alert("Invalid Details");
        }
    
      });
    }

}
