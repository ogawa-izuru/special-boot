import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Article } from '../class/article';
@Injectable({
  providedIn: 'root',
})
export class PostArticleService {
  constructor(private http: HttpClient) {}

  postArticle(article: Article): void {
    // this.http.post('/api/article/' + 7);
  }
}
