import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiTest = environment.apiKeyTest;

  constructor(private http: HttpClient) {
  }

  getTopHeadLines(): Observable<Article[]> {
    return this.http.get<NewsResponse>(this.apiTest)
      .pipe(
        map(resp => resp.articles)
      );
  }
}
