import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Article } from './class/article';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let article: Article[] = [
      {
        id: 1,
        title: 'BootCampの練習だよ',
        mainContent: 'aaaaaaaaaaaaaa\naaaaaaa',
        good: 3,
        bad: 7,
      },
      {
        id: 4,
        title: '4だよ',
        mainContent: 'aaaaaaaaaaaaaa\naaaaaaa',
        good: 1,
        bad: 99,
      },
    ];
    return { article };
  }
}
