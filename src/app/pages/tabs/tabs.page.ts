import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor() { }
  ngOnInit() {   
  }

}
