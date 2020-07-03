import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogDetailService } from '../service/blog-detail.service';
import { Article } from '../class/article';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  article;
  title;
  mainContent;
  good;
  bad;
  routeParam;

  constructor(
    private detail: BlogDetailService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.routeParam = params.get('id');
    });
    this.article = await this.detail
      .getArticle(this.routeParam)
      .then((response) => response);
    this.title = this.article.title;
    this.mainContent = this.article.mainContent;
    this.good = this.article.good;
    this.bad = this.article.bad;
  }
}
