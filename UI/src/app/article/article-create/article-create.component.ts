import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  title = 'article-create';
  userDetails: any;

  constructor(private _router : Router,private service:UserService) { }

  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      (res) => {
        this.userDetails = res;
      }, (err) => {
        console.log(err);
      }
    );
  }
  close(){
    alert('logged out');
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }
}
