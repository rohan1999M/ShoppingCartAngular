import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  LoginForm = new FormGroup ({
    username : new FormControl('',[Validators.email,Validators.required]),
    password : new FormControl('',[Validators.nullValidator,Validators.minLength(4)])

  })

 user = 'Rahul@gmail.com';  // Admin 
 pass = 'Admin';

 user1 = 'Rohan@gmail.com';
 pass1 = 'Rohan';

  LoginBtn(){
     
    console.log(this.LoginForm.value)
    if((this.user == this.LoginForm.value.username)&&(this.pass == this.LoginForm.value.password)){
      console.log('ADMIN Login');
      localStorage.setItem("user",this.user); 
      localStorage.setItem("pass",this.pass);
      // this.router.navigate(['AdminDashboard'])
      this.router.navigate(['addCategory'])

    }
    else if((this.user1 == this.LoginForm.value.username)&&(this.pass1 == this.LoginForm.value.password)){
      console.log('user Login');
      localStorage.setItem("user",this.user1); 
      localStorage.setItem("pass",this.pass1);
      this.router.navigate(['USER/home'])
    }
   else{
    alert("USER NOT FOUND")
    this.router.navigate(['login'])
   }
  }

}
