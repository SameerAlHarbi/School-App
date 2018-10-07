import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsModel } from '../news.model';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit, OnDestroy {

  newsItem: NewsModel;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.newsItem = {
      id: this.route.snapshot.params['id'],
      title: this.route.snapshot.params['title'],
      date: new Date(2018, 4, 8)

    };
    this.paramsSubscription = this.route.params
      .subscribe((params: Params) => {
        this.newsItem.id = params['id'];
        this.newsItem.title = params['title'];
      });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  editNews() {
      this.router.navigate(['edit'],
        {relativeTo: this.route, queryParams: {allowEdit: 'yes'}, fragment: 'Loading'});
  }

}
