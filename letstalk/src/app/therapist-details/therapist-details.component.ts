import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-therapist-details',
  templateUrl: './therapist-details.component.html',
  styleUrls: ['./therapist-details.component.css']
})
export class TherapistDetailsComponent implements OnInit {
  _id:String;
  private sub:any;
  details={address:"",contact_no:"",title:"",about_me:"",help:"",therapy:"",facebook:"",twitter:"",instagram:"",linkedin:"",user_id:""};
  basic_details={user_type:"",name:"",gender:"",dob:"",username:"",email:"",password:"",status:""};
  constructor(private _auth:AuthService,private router:Router,private route: ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this._id = params['id']; // (+) converts string 'id' to a number
console.log(this._id+"current Id");
      // In a real app: dispatch action to load the details here.
   });
    
    this._auth.getTherapistBasicData(this._id).subscribe((data)=>{
    this.basic_details=JSON.parse(JSON.stringify(data));
  })
    this._auth.getTherapistDetails(this._id).subscribe((data)=>{
      this.details=JSON.parse(JSON.stringify(data));
     console.log(this.details.user_id+"getting user Idddddddd")
    //this.details.user_id=this._id;
    })

  }
}
