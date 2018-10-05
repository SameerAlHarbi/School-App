import { Component, OnInit } from '@angular/core';
import { NewsModel } from './news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList = [
    {id: 1, title: 'Test Title 1', date: new Date(2018, 2, 3)},
    {id: 2, title: 'Test Title 2', date: new Date(2018, 2, 7)},
    {id: 3, title: 'Test Title 3', date: new Date(2018, 2, 4)},
  ];

  constructor() { }

  ngOnInit() {
  }

}
