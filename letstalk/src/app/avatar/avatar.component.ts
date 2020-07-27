import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { FileUploadService } from "../shared/file-upload.service";
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})

export class AvatarComponent implements OnInit {
  preview: string;
  form: FormGroup;
  percentDone: any = 0;
  users = [];
  id:String;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public fileUploadService: FileUploadService
  ) {
    // Reactive Form
    this.form = this.fb.group({
      name: [''],
      avatar: [null]
    })
  }

  ngOnInit() {
    this.id=localStorage.getItem('user_id');
   }

  // Image Preview
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  submitForm() {
    this.fileUploadService.addUser(
      this.form.value.name,
      this.form.value.avatar
    ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          // this.percentDone = Math.round(event.loaded / event.total * 100);
          // console.log(`Uploaded! ${this.percentDone}%`);
          this.router.navigate(['psychotherapist_profile'])
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          // this.percentDone = false;
          
      }
    })
  }

}
