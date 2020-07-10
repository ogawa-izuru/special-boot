import { Component, OnInit } from '@angular/core';
import { BlogDetailService } from '../service/blog-detail.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  articleList;

  constructor(private detail: BlogDetailService) {}

  async ngOnInit() {
    // this.articleList = await this.detail
    //   .getAllArticle()
    //   .then((response) => response);
    // this.articleList = this.articleList.sort(function (a, b) {
    //   if (a.id < b.id) {
    //     return -1;
    //   } else {
    //     return 1;
    //   }
    // });
  }
}
