import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogDetailService {
  constructor(private http: HttpClient) {}

  async getArticle() {
    const res = await this.http.get('/api/article/').toPromise();
    return res;
  }
}
