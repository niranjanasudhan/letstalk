import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { PsychotherapistProfileComponent } from './psychotherapist-profile/psychotherapist-profile.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { TherapistsComponent } from './therapists/therapists.component';
import { MessageComponent } from './message/message.component';
import { InboxComponent } from './inbox/inbox.component';
import { ClientProfileEditComponent } from './client-profile-edit/client-profile-edit.component';
import { PsychotherapistProfileEditComponent } from './psychotherapist-profile-edit/psychotherapist-profile-edit.component';
import { PsychotherapistMoreDetailsComponent } from './psychotherapist-more-details/psychotherapist-more-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { TherapistDetailsComponent } from './therapist-details/therapist-details.component';
import { BookingComponent } from './booking/booking.component';
import { TherapistInboxComponent } from './therapist-inbox/therapist-inbox.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BlogComponent } from './blog/blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BookingsComponent } from './bookings/bookings.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
  ,
  {
    path:'home',
    component:HomeComponent
  }
  ,
  {
    path:'login',
    component:LoginComponent
  }
  ,
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'success',
    component:SuccessComponent
  },
  {
    path:'psychotherapist_profile',
    component:PsychotherapistProfileComponent
  }
  ,
  {
    path:'client_profile',
    component:ClientProfileComponent
  }
  ,
  {
    path:'therapists',
    component:TherapistsComponent
  }
  ,
  {
    path:'message',
    component:MessageComponent
  }
  ,
  {
    path:'inbox',
    component:InboxComponent
  }
  ,
  {
    path:'client-profile-edit',
    component:ClientProfileEditComponent
  }
  ,
  {
    path:'psychotherapist-profile-edit',
    component:PsychotherapistProfileEditComponent
  }
  ,
  {
    path:'details',
    component:PsychotherapistMoreDetailsComponent
  }
  ,
  {
    path:'post_list',
    component:PostListComponent
  }
  ,
  {
    path:'add_post',
    component:PostComponent
  }
  ,
  // {
  //   path:'therapist_details',
  //   component:TherapistDetailsComponent
  // },
  {
    path: 'therapist_details/:id', component: TherapistDetailsComponent 
  }
  ,
  {
    path: 'book/:id', component: BookingComponent 
  }
  ,
  {
    path: 'message/:id', component: MessageComponent
  }
  ,
  {
    path:'therapist-inbox',
    component:TherapistInboxComponent
  }
  ,
  {
    path:'change_profilepic',
    component:AvatarComponent
  }
  ,
  {
    path:'blog',
    component:BlogComponent
  }
  ,
  {
    path: 'blog_single/:id', component: BlogSingleComponent
  }
  ,
  {
    path: 'bookings', component: BookingsComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
