import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  users;
  user_id;
  constructor(private _post:PostService,private _router:Router,private fb:FormBuilder) { 
    this.user_id=localStorage.getItem('user_id');
    
  }
 
  postData={user_id:this.user_id,title:'',desc:''};
  
  postForm=this.fb.group(
    {
      user_id:[''],
      title:['',[Validators.required]],
      desc:['',[Validators.required]]
    
    }
  )
  ngOnInit(): void {
  }
  post(){

    
    this.postData.user_id=localStorage.getItem('user_id');
    console.log(this.postData.user_id);
    this._post.addPost(this.postData);
    console.log("Called");
    alert("success");
    this._router.navigate(['/post_list']);
    
    

  }

}
