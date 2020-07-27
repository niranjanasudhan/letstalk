import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-therapist-inbox',
  templateUrl: './therapist-inbox.component.html',
  styleUrls: ['./therapist-inbox.component.css']
})
export class TherapistInboxComponent implements OnInit {
  _id:String;
  private sub:any;
  message=<any>{};
  
  users={name:'',gender:'',dob:'',username:'',email:'',password:'',user_type:''};
  temp=<any>{name:'',gender:'',dob:'',username:'',email:'',password:'',user_type:''};
  arrObj = [{name:'',gender:'',dob:'',username:'',email:'',password:'',user_type:''}];
  constructor(private _auth:AuthService,private _message:MessageService,private _router:Router,private route: ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('user_id')+"therapist id")
    this._message.getAllMessageTherapist(localStorage.getItem('user_id')).subscribe((data)=>{
      this.message=JSON.parse(JSON.stringify(data));
    
      for (var i=0;i<this.message.length;i++) {
        console.log(this.message[i]+"keyyyyyyyyyyssss");
        this._auth.getUsers(this.message[i]).subscribe((data)=>{
         // console.log(JSON.parse(JSON.stringify(data)));
          // this.users.push(JSON.parse(JSON.stringify(data)));
          //console.log(this.arrObj.+"return users");
          this.users=JSON.parse(JSON.stringify(data));
          
      })
      
      }
    
      console.log(this.users.name);
      
    })
  }

}
