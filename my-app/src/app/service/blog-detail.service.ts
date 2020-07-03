import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogDetailService {
  constructor(private http: HttpClient) {}

  async getArticle(id) {
    const res = await this.http.get('/api/article/' + id).toPromise();
    console.log(res);
    return res;
  }
}
