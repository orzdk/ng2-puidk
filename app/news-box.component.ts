import { Component, Input } from '@angular/core';
import { News } from './class/news.class';

@Component({
    selector: 'news-box',
    templateUrl: 'html/news-box.component.html',
    styleUrls: ['css/news-box.component.css']
})
export class NewsBox { 
	@Input()
	newsitem: News;
}
