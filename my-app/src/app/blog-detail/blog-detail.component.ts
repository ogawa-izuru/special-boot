import { Component, OnInit } from '@angular/core';
import { BlogDetailService } from '../service/blog-detail.service';
import { Article } from '../class/article';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  article: Article;

  constructor(private detail: BlogDetailService) {}

  async ngOnInit() {
    this.article = await this.detail
      .getArticle()
      .then((response) => response[0]);
  }

  async getTitle() {}
}
