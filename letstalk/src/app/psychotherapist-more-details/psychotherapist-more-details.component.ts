import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-psychotherapist-more-details',
  templateUrl: './psychotherapist-more-details.component.html',
  styleUrls: ['./psychotherapist-more-details.component.css']
})
export class PsychotherapistMoreDetailsComponent implements OnInit {
  _id:String;
  private sub:any;
  users={address:'',contact_no:'',title:'',about_me:'',help:'',therapy:'',facebook:'',twitter:'',instagram:'',linkedin:'',user_id:''};
  constructor(private _auth:AuthService,private router:Router,private route: ActivatedRoute,private fb:FormBuilder) { }
  registerForm=this.fb.group(
    {
      address:[],
      contact_no:[],
      title:[],
      about_me:[],
      help:[],
      therapy:[],
      facebook:[],
      twitter:[],
      instagram:[],
      linkedin:[],
      user_id:[]
    })
    userDetails={address:'',contact_no:'',title:'',about_me:'',help:'',therapy:'',facebook:'',twitter:'',instagram:'',linkedin:'',user_id:''};
  ngOnInit(): void {
    this._auth.getDetails(localStorage.getItem('user_id')).subscribe((data)=>{
      var userData=JSON.parse(JSON.stringify(data));
   
      this.userDetails.address=userData.address;
      this.userDetails.contact_no=userData.contact_no;
      this.userDetails.title=userData.title;
      this.userDetails.about_me=userData.about_me;
      this.userDetails.help=userData.help;
      this.userDetails.therapy=userData.therapy;
      this.userDetails.facebook=userData.facebook;
      this.userDetails.twitter=userData.twitter;
      this.userDetails.instagram=userData.instagram;
      this.userDetails.linkedin=userData.linkedin;
      this.userDetails.user_id=userData.user_id;
     
       
     })
  }

  editUser(){
    this._id=localStorage.getItem('user_id');
    this.userDetails.user_id=localStorage.getItem('user_id');
    console.log(this._id);
    this._auth.moreDetails(this.userDetails);
    console.log("Called");
    alert("success");
    this.router.navigate(['/psychotherapist_profile']);
    }
}
