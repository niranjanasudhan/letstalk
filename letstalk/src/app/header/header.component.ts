import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthService,private _router:Router) { }

  check_login()
  {
    if(this._auth.loggedIn())
    {
    
      return false;
    }
    else
    {
     
      return true;
    }
    
  }
  check_cuser()
  {
   
    if(localStorage.getItem('type')=="client")
    {
     
      return true;
    }
    else
    {
     
      return false;
    }
  }
  check_puser()
  {
    
    if(localStorage.getItem('type')=="psychotherapist")
    {
     
      return true;
    }
    else
    {
      return false;
    }
  }
  logoutUser()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('type');
    localStorage.removeItem('user_id');
    localStorage.removeItem('username');
    // localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }
 
  ngOnInit(): void {
    
  }
 

}
