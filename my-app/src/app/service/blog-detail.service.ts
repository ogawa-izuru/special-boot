import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';

import { Article } from '../class/article';

@Injectable({
  providedIn: 'root',
})
export class BlogDetailService {
  constructor(private http: HttpClient) {}

  async getArticle(id): Promise<any> {
    return await this.http.get('/api/article/' + id).toPromise();
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
    console.log(id);
    return await this.http.delete('api/article/4').toPromise();
  }

  async getAllArticle() {
    let res = await this.http.get('/api/article/').toPromise();
    return res;
  }
}
