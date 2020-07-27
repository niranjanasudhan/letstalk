import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-psychotherapist-profile',
  templateUrl: './psychotherapist-profile.component.html',
  styleUrls: ['./psychotherapist-profile.component.css']
})
export class PsychotherapistProfileComponent implements OnInit {
  users:{name:'',gender:'',dob:'',username:'',email:'',password:'',user_type:''};
  user_id:String;
  constructor(private authService:AuthService,private router:Router) {
    this.user_id=localStorage.getItem('user_id');
   }
  
  ngOnInit(): void {
    this.authService.getUsers(this.user_id).subscribe((data)=>{
      this.users=JSON.parse(JSON.stringify(data));
  })
  }

}
