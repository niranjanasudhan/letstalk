import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
  
  users:{_id:'',user_type:'',name:'',gender:'',dob:'',username:'',email:'',password:''};
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.authService.getUsers(localStorage.getItem('user_id')).subscribe((data)=>{
      
      this.users=JSON.parse(JSON.stringify(data));
     
  })
  }

}
