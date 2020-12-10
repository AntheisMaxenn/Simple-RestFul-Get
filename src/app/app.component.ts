
import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/';




interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const url = 'https://jsonplaceholder.typicode.com/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'rxjsPractice';


  users$: Observable<User[]>;
  posts$: Observable<Post[]>;

  selectUser: number;


  constructor(private http: HttpClient){}

  ngOnInit(){
    this.users$ = this.http
    .get<User[]>(url + 'users');
  }

  getUserPosts(id: string){
    this.posts$ = this.http.get<Post[]>(url + 'posts?userId=' + id);
  }


}
