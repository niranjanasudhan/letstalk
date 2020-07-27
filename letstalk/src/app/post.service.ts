import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  addPost(data)
  {
    return this.http.post<any>("http://localhost:3000/post/add",data)
    .subscribe(data=>{console.log(data)})
  }
  getPosts(item)
  {
   
   
    let params = new HttpParams();
    params = params.append('_id', item);

 return this.http.get('http://localhost:3000/post/get_posts', {params: params});

  }
  getAllPosts()
  {
 

 return this.http.get('http://localhost:3000/post/get_Allposts');

  }
  getSinglePost(item)
  {
    
   
    let params = new HttpParams();
    params = params.append('_id', item);

 return this.http.get('http://localhost:3000/post/getSinglePost', {params: params});

  }
  deletePost(id)
  {
    return this.http.post('http://localhost:3000/post/delete',{"id":id})
    .subscribe(data=>{console.log(data)})
  }

}
