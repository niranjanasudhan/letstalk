import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  _id:String;
  private sub:any;
  registeredUser={name:'',dob:'',contact_no:'',email:'',cdate:'',service:'',therapist_id:''};
  constructor(private _book:BookService,private _auth:AuthService,private _router:Router,private route: ActivatedRoute,private fb:FormBuilder) { }
  registerForm=this.fb.group(
    {
     
      name:['',[Validators.required]],
      dob:['',[Validators.required]],
      email:['',[Validators.required]],
      contact_no:['',[Validators.required]],
      cdate:['',[Validators.required]],
      service:['',[Validators.required]],
      therapist_id:[],
     
    })

    registerUser(){
     
      console.log(this.registeredUser);
      this._book.book(this.registeredUser)
    .subscribe(
      res =>
      {
       
        this._router.navigate(['/therapist']);
        
      },
      err=>console.log(err)
    )
    alert("Successfully saved your data");
    this._router.navigate(['/therapists']);
    }
  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this._id = params['id']; // (+) converts string 'id' to a number
console.log(this._id+"current Id");
      // In a real app: dispatch action to load the details here.
   });

   var c_user=localStorage.getItem('user_id');
console.log(c_user+"user id")
   this._auth.getBookUser(c_user).subscribe((data)=>{
    var bookedUser=JSON.parse(JSON.stringify(data));
    console.log(bookedUser+"haiiii");
    this.registeredUser.name=bookedUser.name;
    this.registeredUser.email=bookedUser.email;
    this.registeredUser.contact_no="";
    this.registeredUser.dob=bookedUser.dob;
    this.registeredUser.therapist_id=""+this._id;

   
    
    console.log(bookedUser.productName);

  })

}
}
