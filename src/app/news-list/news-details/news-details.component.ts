import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  news: {id:number, title: string};

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.news = {
      id: this.route.snapshot.params['id'],
      title:this.route.snapshot.params['title']
    };
  }

}
