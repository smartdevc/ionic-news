import { Component } from '@angular/core';
import { Article } from '../interfaces';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private newsService: NewsService) { }

  articles: Article[] = [];

  ngOnInit() {
    this.newsService.getTopHeadLines()
      .subscribe((resp) => {
        this.articles = resp,
          this.articles = this.articles.slice(0, 25);
        console.log('this.articles', this.articles);
      }
      )

  }

}
