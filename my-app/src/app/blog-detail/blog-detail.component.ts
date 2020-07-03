import { Component, OnInit } from '@angular/core';
import { BlogDetailService } from '../service/blog-detail.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  title;

  constructor(private detail: BlogDetailService) {}

  async ngOnInit() {
    this.title = await this.detail
      .getArticle()
      .then((response) => response[0].title);
  }

  async getTitle() {}
}
