import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'InMemoryDbService';

  constructor(private http: HttpClient) {}

  async getProducts() {
    const res = await this.http.get('/api/article/').toPromise();
    console.log(res);
  }
}
