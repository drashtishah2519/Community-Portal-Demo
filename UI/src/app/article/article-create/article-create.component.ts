import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  title = 'article-create';

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }
  close(){
    this._router.navigate(['/'])
  }

}
