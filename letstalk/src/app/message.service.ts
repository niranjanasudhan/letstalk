import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }
  message(user)
  {
    return this.http.post<any>("http://localhost:3000/message/add",user)
  }
  getMessage(item,tid)
  {
  
   
    let params = new HttpParams();
    params = params.append('_id', item);
    params = params.append('tid', tid);
    return this.http.get('http://localhost:3000/message/view_message', {params: params});

  }
  getAllMessage(item)
  {
   
   
    let params = new HttpParams();
    params = params.append('_id', item);
    return this.http.get('http://localhost:3000/message/view_all_message', {params: params});
  }
  getAllMessageTherapist(item)
  {
   
   
    let params = new HttpParams();
    params = params.append('_id', item);
    return this.http.get('http://localhost:3000/message/view_all_messageTherapist', {params: params});
  }
  

}
