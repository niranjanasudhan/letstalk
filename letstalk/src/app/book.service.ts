import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  book(user)
  {
    return this.http.post<any>("http://localhost:3000/book/book",user)
  }
  getBookings(item)
  {
    
   
    let params = new HttpParams();
    params = params.append('_id', item);
    return this.http.get("http://localhost:3000/book/bookings", {params: params}) 
  }
  
}
