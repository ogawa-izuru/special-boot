import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isIconShow = false;

  constructor() {}

  ngOnInit(): void {}

  showIconNav() {
    this.isIconShow = !this.isIconShow;
  }
}
