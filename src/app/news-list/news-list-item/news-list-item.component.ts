import { Component, OnInit, Input } from '@angular/core';
import { NewsModel } from '../news.model';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.css']
})
export class NewsListItemComponent implements OnInit {

  @Input() newsItem: NewsModel;

  constructor() { }

  ngOnInit() {
  }

}
