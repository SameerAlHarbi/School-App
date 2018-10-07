import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NewsModel } from '../news.model';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  newsItem: NewsModel;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.newsItem = {
      id: +this.route.snapshot.params['id'],
      title: '',
      date: new Date(2018, 4, 8)
    };
    this.route.queryParams.subscribe(
      (params: Params) => {
          console.log(params['allowEdit']);
       });
  }

}
