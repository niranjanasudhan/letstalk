import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
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
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { TherapistDetailsComponent } from './therapist-details/therapist-details.component';
import { BookingComponent } from './booking/booking.component';
import { TherapistInboxComponent } from './therapist-inbox/therapist-inbox.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BlogComponent } from './blog/blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BookingsComponent } from './bookings/bookings.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SuccessComponent,
    PsychotherapistProfileComponent,
    ClientProfileComponent,
    TherapistsComponent,
    MessageComponent,
    InboxComponent,
    ClientProfileEditComponent,
    PsychotherapistProfileEditComponent,
    PsychotherapistMoreDetailsComponent,
    PostComponent,
    PostListComponent,
    TherapistDetailsComponent,
    BookingComponent,
    TherapistInboxComponent,
    AvatarComponent,
    BlogComponent,
    BlogSingleComponent,
    BookingsComponent,
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
