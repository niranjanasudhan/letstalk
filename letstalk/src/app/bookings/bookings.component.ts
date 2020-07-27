import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookingData={name:'',dob:'',contact_no:'',email:'',cdate:'',service:'',therapist_id:''};
  constructor(private _book:BookService,private _auth:AuthService,private _router:Router,private route: ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
    this._book.getBookings(localStorage.getItem('user_id')).subscribe((data)=>{
     
      this.bookingData=JSON.parse(JSON.stringify(data));
      // console.log(JSON.stringify(data));
      // console.log(this.bookingData.cdate+"main data");
  })
  }

}
