import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PostService } from '../post.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css']
})
export class BlogSingleComponent implements OnInit {
  _id:String;
  private sub:any;
  posts={_id:'',user_id:'',title:'',desc:''};
  constructor(private _post:PostService,private _auth:AuthService,private router:Router,private route: ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this._id = params['id']; // (+) converts string 'id' to a number
console.log(this._id+"current Id");
      // In a real app: dispatch action to load the details here.
   });


      this._post.getSinglePost(this._id).subscribe((data)=>{
      var posts=JSON.parse(JSON.stringify(data));
        console.log(posts);
      this.posts._id=posts[0]._id;
      this.posts.title=posts[0].title;
      this.posts.desc=posts[0].desc;
      this.posts.user_id=posts[0].user_id;
     
     
       
     })
   
   
   
  
  }

}
