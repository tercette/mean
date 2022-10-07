import { PostsService } from './../posts.service';
import { Subscription } from 'rxjs'

import { Component, OnDestroy, OnInit } from "@angular/core";
import { Post } from "../post.model";

@Component({
  selector: 'app-post-list',
  templateUrl: "./post-list.component.html",
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  /* posts = [
    { title: 'First post', content: "This is the first post's content"},
    { title: 'Second post', content: "This is the second post's content"},
    { title: 'Third post', content: "This is the third post's content"}
  ] */
  posts: Post[] = [];
  private postSub: Subscription = new Subscription;

  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postSub = this.postsService.getPostUpdatedListener()
    .subscribe((posts:Post[]) =>{
      this.posts = posts;
    })
  }

  ngOnDestroy(): void {
      this.postSub.unsubscribe()
  }

}

