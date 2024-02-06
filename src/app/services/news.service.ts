import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '../interfaces';
import { Observable, map } from 'rxjs';

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
