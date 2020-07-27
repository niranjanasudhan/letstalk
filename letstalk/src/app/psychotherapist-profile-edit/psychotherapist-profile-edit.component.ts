import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-psychotherapist-profile-edit',
  templateUrl: './psychotherapist-profile-edit.component.html',
  styleUrls: ['./psychotherapist-profile-edit.component.css']
})
export class PsychotherapistProfileEditComponent implements OnInit {

  _id:String;
  private sub:any;

  users={id:'',name:'',gender:'',dob:'',username:'',email:'',password:'',user_type:''};
  constructor(private _auth:AuthService,private router:Router,private route: ActivatedRoute,private fb:FormBuilder) { }
  registerForm=this.fb.group(
    {
      name:['',[Validators.required]],
      gender:['',[Validators.required]],
      dob:['',[Validators.required]],
      username:['',[Validators.required]],
      email:['',[Validators.required]]
    })

    userDetails={_id:'',name:'',gender:'',dob:'',username:'',email:'',password:'',user_type:''};
  ngOnInit(): void {
    this._auth.getEditClient().subscribe((data)=>{
      var userData=JSON.parse(JSON.stringify(data));
   
      this.userDetails._id=userData._id;
      this.userDetails.name=userData.name;
      this.userDetails.dob=userData.dob;
      this.userDetails.gender=userData.gender;
      this.userDetails.username=userData.username;
      this.userDetails.email=userData.email;
     
       
     })
  }
  editUser(){
     
    console.log(this._id);
    this._auth.editClient(this.userDetails);
    console.log("Called");
    alert("success");
    this.router.navigate(['/psychotherapist_profile']);
    }
}
