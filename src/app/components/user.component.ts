import { Component } from '@angular/core';
import {PostsService} from '../../app/services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
  //styleUrls: ['./app.component.css']
})
export class UserComponent {
  name:string;
  email:string;
  address:address;
  hobbies:string[];
  showHobbies:boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.name = 'Sam Smith';
    this.email = 'sravya2work@gmail.com';
    this.address = {
      street: '372 empire state dr',
      city: 'canton',
      state: 'MI'
    };
    this.hobbies = ['music', 'movies', 'sports'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;

    });
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
  }

  deleteHobby(index){
    this.hobbies.splice(index, 1);
  }

}

interface address {
  street: string;
  city: string;
  state: string;
}

interface Post{
  id: number;
  title: string;
  body: string;
}
