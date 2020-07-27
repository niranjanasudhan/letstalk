import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registeredUser={user_type:'',name:'',gender:'',dob:'',username:'',email:'',password:'',status:'1'};
  constructor(private _auth:AuthService,private _router:Router,private fb:FormBuilder) { }
  

  registerForm=this.fb.group(
    {
      user_type:['',[Validators.required]],
      name:['',[Validators.required]],
      gender:['',[Validators.required]],
      dob:['',[Validators.required]],
      username:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required,,Validators.minLength(6)]]
    
    })


    

    registerUser(){
      console.log("login details");
      console.log(this.registeredUser);
      this._auth.registerUser(this.registeredUser)
    .subscribe(
      res =>
      {
        console.log(res.token);
        // localStorage.setItem('token', res.token)
        this._router.navigate(['/success'])
      },
      err=>console.log(err)
    )
    }
  ngOnInit(): void {
  }

}
