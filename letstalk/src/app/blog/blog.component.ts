import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts:{_id:'',title:'',desc:'',user_id:''};
  constructor(private _post:PostService,private router:Router) { }

  ngOnInit(): void {
    this._post.getAllPosts().subscribe((data)=>{
      
      this.posts=JSON.parse(JSON.stringify(data));
      console.log(this.posts.title+"main data");
  })
  }

}
