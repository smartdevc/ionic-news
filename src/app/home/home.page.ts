import { Component, ViewChild } from '@angular/core';
import { NewsService } from '../services/news-service.service';
import { Article } from '../interfaces';
import { Router } from '@angular/router';
import { ArticleComponent } from '../components/article/article.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles: Article[] = [];
  article!: Article;

  @ViewChild(ArticleComponent) articleSelected !: ArticleComponent;

  constructor(private newsService: NewsService, private router:Router) {}

  ngOnInit() {
    this.newsService.getTopHeadLines().subscribe((resp) => {
      (this.articles = resp), (this.articles = this.articles.slice(0, 25));
      console.log('this.articles', this.articles);
    });
  }


setArticle(item: Article){
this.article=item;
}

  navigate(){
    this.router.navigate(['home/article']);
  }

  ngAfterViewInit(){
    this.articleSelected.article=this.article;
    this.router.navigate(['home/article']);
  }
}
