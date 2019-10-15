import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Post } from 'src/app/shared/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  // posts
  posts: Post[] = []
  postsSub: Subscription
  deletePostsSub: Subscription
  searchStr = ''

  displayedColumns: string[] = ['id', 'author', 'title', 'text', 'date', 'open', 'remove'];

  // cols = {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'}

  constructor(
    private postsService: PostsService
  ) { }


  ngOnInit() {
    this.postsSub = this.postsService.getAll().subscribe(posts => {
      console.log(posts)
      this.posts = posts
    })
  }

  ngOnDestroy() {
    if(this.postsSub){
      this.postsSub.unsubscribe()
    }
    if(this.deletePostsSub){
      this.deletePostsSub.unsubscribe()
    }
  }

  remove(id: string){
    this.deletePostsSub = this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id)
    })
  }

}
