import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.component.html',
  styleUrls: ['./therapists.component.css']
})
export class TherapistsComponent implements OnInit {
  users:{name:'',gender:'',dob:'',username:'',email:'',password:'',user_type:''};
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.authService.getTherapistUsers().subscribe((data)=>{
      this.users=JSON.parse(JSON.stringify(data));
  })

  
  }
   

}
