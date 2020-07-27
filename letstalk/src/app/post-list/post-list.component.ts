import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts:{_id:'',title:'',desc:'',user_id:''};
  constructor(private _post:PostService,private router:Router) { }

  ngOnInit(): void {
    this._post.getPosts(localStorage.getItem('user_id')).subscribe((data)=>{
      
      this.posts=JSON.parse(JSON.stringify(data));
      console.log(this.posts.title+"main data");
  })
  }

  deletePost(id)
  {
    
  
    this._post.deletePost(id);
   
    alert("success");
    //this.router.navigate(['/']);
    location.reload();
  }

}
