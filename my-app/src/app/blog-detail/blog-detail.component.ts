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
    let temp = AllItem.findIndex((element) => element.id === this.routeParamId);

    console.log(typeof AllItem[0].id);
    console.log(temp);
    AllItem.forEach((element) => {
      console.log(element);
    });
  }
  goNext() {
    alert('Next');
  }

  deleteArticle() {
    alert('消します。');
    this.detail.deleteArticle(this.routeParamId);
  }

  async getAllArticle(): Promise<any> {
    return await this.detail.getAllArticle().then((response) => response);
  }
}
