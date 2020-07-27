import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _registerUrl="http://localhost:3000/api/register";
private _loginUrl="http://localhost:3000/api/login";
  constructor(private http:HttpClient) { }
  registerUser(user)
  {
    return this.http.post<any>(this._registerUrl,user)
  }
  loginUser(user)
  {
  
    return this.http.post<any>(this._loginUrl,user)
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token') 
  }
  getUsers(item)
  {
    
   
    let params = new HttpParams();
    params = params.append('_id', item);
   

//this.http.get('http://localhost:63203/api/CallCenter/GetSupport', { headers: headers, search: params })
 return this.http.get('http://localhost:3000/api/users', {params: params});

  }
  getTherapistUsers()
  {
   return this.http.get('http://localhost:3000/api/therapist_users');
  }
  getEditClient()
  {
    var _id=localStorage.getItem('user_id');
    let params = new HttpParams();
    params = params.append('_id', _id);
   

//this.http.get('http://localhost:63203/api/CallCenter/GetSupport', { headers: headers, search: params })
 return this.http.get('http://localhost:3000/api/Edit_client_data', {params: params});
  }

  editClient(item)
  {
 
    return this.http.post('http://localhost:3000/api/updateClientData',{"user":item})
    .subscribe(data=>{console.log(data)})
  
  }

  getDetails(item)
  {
    var _id=item;
    let params = new HttpParams();
    params = params.append('_id', _id);
   

//this.http.get('http://localhost:63203/api/CallCenter/GetSupport', { headers: headers, search: params })
 return this.http.get('http://localhost:3000/api/get_details', {params: params});
  }

  moreDetails(item)
  {
    var id=localStorage.getItem('user_id');
    return this.http.post('http://localhost:3000/api/updateMoreData',{"user":item,"id":id})
    .subscribe(data=>{console.log(data)})
  
  }

  getTherapistDetails(item)
  {
      
    let params = new HttpParams();
    params = params.append('_id', item);
 return this.http.get('http://localhost:3000/api/getTherapistDetails', {params: params});
  }
  getTherapistBasicData(item)
  {
   
   
    let params = new HttpParams();
    params = params.append('_id', item);
 return this.http.get('http://localhost:3000/api/getTherapistBasicData', {params: params});
  }

  getUsersInbox(type)
  {
    
    let params = new HttpParams();
    params = params.append('type', type);
 return this.http.get('http://localhost:3000/api/getUsersInbox', {params: params});
  }

  getBookUser(item)
  {
   
   
    let params = new HttpParams();
    params = params.append('_id', item);
 return this.http.get('http://localhost:3000/api/getBookUser', {params: params});
  }
}
