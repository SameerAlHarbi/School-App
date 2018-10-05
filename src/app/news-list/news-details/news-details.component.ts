import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit, OnDestroy {

  news: {id: number, title: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.news = {
      id: this.route.snapshot.params['id'],
      title: this.route.snapshot.params['title']
    };
    this.paramsSubscription = this.route.params
      .subscribe((params: Params) => {
        this.news.id = params['id'];
        this.news.title = params['title'];
      });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }


}
