import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedUser={user_type:'',email:'',password:''};
  users;
  constructor(private _auth:AuthService,private _router:Router,private fb:FormBuilder) { }
  loginForm=this.fb.group(
    {
      // email:['',[Validators.required,Validators.pattern('')]],
      // password:['',[Validators.required,Validators.minLength(6)]]
      user_type:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password:['',[Validators.required,Validators.minLength(6)]]
    }
  )

  loginUser(){
  
    console.log(this.loggedUser);
    this._auth.loginUser(this.loggedUser)
  .subscribe(
    res =>
    {
      console.log(res.token);
      console.log(res.user+"user printed");
      this.users=JSON.parse(JSON.stringify(res.user));
       localStorage.setItem('token', res.token);
       localStorage.setItem('type', this.users.user_type);
       localStorage.setItem('user_id', this.users._id);
       localStorage.setItem('username', this.users.username);
       if(this.users.user_type=="client")
       {
        this._router.navigate(['/client_profile'])
       }
       else
       {
        this._router.navigate(['/psychotherapist_profile'])
       }
      
    },
    err=>
    {
      alert("Invalid Username or Password");
      console.log(err);
    }
    //console.log(err)
    
  )
  }
  ngOnInit(): void {
  }

}
