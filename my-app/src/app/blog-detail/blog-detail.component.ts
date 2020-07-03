import { Component, OnInit } from '@angular/core';
import { BlogDetailService } from '../service/blog-detail.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  title = '定数だよーーん';

  constructor(private detail: BlogDetailService) {}

  ngOnInit(): void {}

  async getTitle() {
    this.title = await this.detail
      .getArticle()
      .then((response) => response[0].title);
  }
}
