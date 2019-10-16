import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from 'src/app/shared/interfaces';
import { PostsService } from 'src/app/shared/services/posts.service';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup

  constructor(
    private postsService: PostsService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
    })
  }

  submit(){
    if(this.form.invalid) return 
    const {title, author, text} = this.form.value
    const post: Post = {
      title, 
      author, 
      text,
      date: new Date()
    }
    this.postsService.create(post).subscribe(() => {
      this.alertService.success('post was created!')
      this.form.reset()
    })
    // console.log(post)

  }

}
