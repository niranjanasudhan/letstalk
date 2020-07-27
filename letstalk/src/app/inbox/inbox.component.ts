import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  _id:String;
  private sub:any;
  message=[];
  type:String;
  users:{name:'',gender:'',dob:'',username:'',email:'',password:'',user_type:''};
  constructor(private _auth:AuthService,private _message:MessageService,private _router:Router,private route: ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
 

        this._auth.getUsersInbox(localStorage.getItem('type')).subscribe((data)=>{
              this.users=JSON.parse(JSON.stringify(data));
          })
        
      
        }

}
