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
  article: Article;
  title: string;
  mainContent: string;
  good: number;
  bad: number;
  routeParamId: number;
  isFirst: any;
  isLast: any;

  constructor(
    private detail: BlogDetailService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.routeParamId = parseInt(params.get('id'));
    });
    this.article = await this.detail
      .getArticle(this.routeParamId)
      .then((response) => response);
    this.title = this.article.title;
    this.mainContent = this.article.mainContent;
    this.good = this.article.good;
    this.bad = this.article.bad;

    let AllItem: Article[];
    AllItem = await this.getAllArticle();
    AllItem = AllItem.sort(function (a, b) {
      if (a.id < b.id) {
        return -1;
      } else {
        return 1;
      }
    });
    let currentIndex = AllItem.findIndex(
      (element) => element.id === this.routeParamId
    );
    this.isFirst = !AllItem[currentIndex - 1];
    this.isLast = !AllItem[currentIndex + 1];
  }

  async goPrev() {
    // this.article = await this.detail
    //   .getPrevArticle(this.routeParamId)
    //   .then((response) => response);
    // console.log(this.article);
    let AllItem: Article[];
    AllItem = await this.getAllArticle();
    AllItem = AllItem.sort(function (a, b) {
      if (a.id < b.id) {
        return -1;
      } else {
        return 1;
      }
    });
    let currentIndex = AllItem.findIndex(
      (element) => element.id === this.routeParamId
    );

    this.article = AllItem[currentIndex - 1];
    if (this.article) {
      this.title = this.article.title;
      this.mainContent = this.article.mainContent;
      this.good = this.article.good;
      this.bad = this.article.bad;
      this.routeParamId = this.article.id;
      this.isFirst = !AllItem[currentIndex - 2];
      this.isLast = false;
      history.pushState(null, null, 'detail/' + this.routeParamId);
    }
  }
  async goNext() {
    let AllItem: Article[];
    AllItem = await this.getAllArticle();
    AllItem = AllItem.sort(function (a, b) {
      if (a.id < b.id) {
        return -1;
      } else {
        return 1;
      }
    });
    let currentIndex = AllItem.findIndex(
      (element) => element.id === this.routeParamId
    );
    this.article = AllItem[currentIndex + 1];
    if (this.article) {
      this.title = this.article.title;
      this.mainContent = this.article.mainContent;
      this.good = this.article.good;
      this.bad = this.article.bad;
      this.routeParamId = this.article.id;
      this.isLast = !AllItem[currentIndex + 2];
      this.isFirst = false;
      history.pushState(null, null, 'detail/' + this.article.id);
    }
  }

  async deleteArticle() {
    alert('消します。');
    let sample = await this.detail.deleteArticle(this.routeParamId);
    console.log(sample);
  }

  async getAllArticle(): Promise<any> {
    return await this.detail.getAllArticle().then((response) => response);
  }
}
