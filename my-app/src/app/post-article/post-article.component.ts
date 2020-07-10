import { Component, OnInit } from '@angular/core';
import { PostArticleService } from '../service/post-article.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.scss'],
})
export class PostArticleComponent implements OnInit {
  title: string;
  mainContent: string;
  isError: boolean = false;

  constructor(
    private PostArticleService: PostArticleService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  postArticle(): void {
    (this.title &&
      this.mainContent &&
      this.PostArticleService.postArticle({
        title: this.title,
        maincontent: this.mainContent,
        good: 0,
        bad: 0,
      }).subscribe(() => this.router.navigate(['/']))) ||
      (this.isError = true);
  }
}
