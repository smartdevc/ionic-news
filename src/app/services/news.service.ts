import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiTest = environment.apiKeyTest;

  constructor(private http: HttpClient) { 
      }

      getTopHeadLines(){
        this.http.get(this.apiTest).subscribe(resp=> {
          console.log('resp', resp);
        });
      }


}
