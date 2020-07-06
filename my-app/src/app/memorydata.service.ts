import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Article } from './class/article';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let article: Article[] = [
      {
        id: 4,
        title: 'BootCampの練習だよ',
        mainContent: 'aaaaaaaaaaaaaa\naaaaaaa',
        good: 3,
        bad: 7,
      },

      {
        id: 3,
        title: 'ユーザーIDと紐づけした。',
        mainContent: 'プログラミングを勉強しています。ユーザーIDが欲しいです。',
        good: 30,
        bad: 10,
      },
      {
        id: 1,
        title: '4だよ',
        mainContent: 'aaaaaaaaaaaaaa\naaaaaaa',
        good: 1,
        bad: 99,
      },
      {
        id: 6,
        title: 'サッカーをしました。',
        mainContent: '楽しかったです。',
        good: 50,
        bad: 10,
      },
      {
        id: 5,
        title: 'ページングします',
        mainContent: '頑張ばります。',
        good: 30,
        bad: 10,
      },
    ];
    return { article };
  }
}
