import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Article } from '../class/article';

@Injectable({
  providedIn: 'root',
})
export class BlogDetailService {
  constructor(private http: HttpClient) {}

  getArticle(id): Observable<Article> {
    // return await this.http.get('/api/article/' + id).toPromise();
    return this.http.get<Article>('/api/article/' + id);
  }

  async getPrevArticle(id) {
    // let res = await this.http.get('/api/article/' + --id).toPromise();
    let res = await this.http.get('/api/article/' + --id);

    console.log(res);
    // return res.toPromise() || this.getPrevArticle(id);

    if (res) {
      //ここを改良
      console.log(res.toPromise, 'cccccc');
      return res.toPromise;
    } else {
      this.getPrevArticle(id);
      console.log('bbbbb');
    }
  }

  async deleteArticle(id) {
    return await this.http.delete('api/article/' + id).toPromise();
  }

  async getAllArticle() {
    return await this.http.get('/api/article/').toPromise();
  }

  addGoodCount(article) {
    return this.http.put('/api/article/', article);
  }

  addBadCount(article) {
    return this.http.put('/api/article/', article);
  }
}
