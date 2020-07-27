import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [DatePipe]
})
export class MessageComponent implements OnInit {
  _id:String;
  private sub:any;
   messageUser={user_id:'',therapist_id:'',message:'',date:'',sent_by:''};
   myDate = new Date();
   message:{user_id:'',therapist_id:'',message:'',date:'',sent_by:''};
  constructor(private datePipe: DatePipe,private _message:MessageService,private _router:Router,private route: ActivatedRoute,private fb:FormBuilder) { }
  messageForm=this.fb.group(
    {
     
      user_id:['',[Validators.required]],
      therapist_id:['',[Validators.required]],
      message:['',[Validators.required]],
      date:['',[Validators.required]],
      sent_by:['',[Validators.required]],
     
    })
    messageUserAdd(){
      console.log("login details");
      console.log(this.messageUser);
      this._message.message(this.messageUser)
    .subscribe(
      res =>
      {
      
          
      },
      err=>console.log(err)
    )
    location.reload(); 
    }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this._id = params['id']; // (+) converts string 'id' to a number

this.messageUser.user_id=localStorage.getItem('user_id');
this.messageUser.therapist_id=""+this._id;
if(localStorage.getItem('type')=="client")
{
  this.messageUser.sent_by="C";
}
else
{
  this.messageUser.sent_by="P";
}


this.messageUser.date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd HH:mm:ss');
    })

console.log(this._id+"this is the id")
    this._message.getMessage(localStorage.getItem('user_id'),this._id).subscribe((data)=>{
    this.message=JSON.parse(JSON.stringify(data));
    
     
  })
   
  }

}
