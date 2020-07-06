import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class BlogDetailService {
  constructor(private http: HttpClient) {}

  async getArticle(id) {
    const res = await this.http.get('/api/article/' + id).toPromise();
    return res;
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
    this.http.delete('/api/article/' + id);
  }

  async getAllArticle() {
    let res = await this.http.get('/api/article/').toPromise();
    return res;
  }
}
