import { Component, Input } from '@angular/core';
import { News } from './class/news.class';
import { RedBox } from './red-box.component';

@Component({
    selector: 'news-box',
    templateUrl: 'html/news-box.component.html',
    styleUrls: ['css/news-box.component.css'], 
    directives: [ RedBox ]
})
export class NewsBox { 
	@Input()
	newsitem: News;
}
