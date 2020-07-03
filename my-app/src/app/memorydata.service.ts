import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Article } from './class/article';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let article: Article[] = [
      { id: 1, title: 'unko', mainContent: 'aaaaaaaaaaaaaa' },
    ];
    return { article };
  }
}
