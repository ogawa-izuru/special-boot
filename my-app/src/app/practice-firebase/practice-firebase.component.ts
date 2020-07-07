import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-practice-firebase',
  templateUrl: './practice-firebase.component.html',
  styleUrls: ['./practice-firebase.component.scss'],
})
export class PracticeFirebaseComponent implements OnInit {
  articles;
  articleRef;
  title;
  mainContent;

  constructor(private db: AngularFireDatabase) {
    this.articles = db.list('/article');
    this.articleRef = this.articles.valueChanges();
  }

  ngOnInit(): void {}

  aaaaa() {
    this.articles.push({ title: this.title, mainContent: this.mainContent });
  }
}
