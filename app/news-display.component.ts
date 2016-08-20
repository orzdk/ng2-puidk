import { Component } from '@angular/core';
import { News } from './class/news.class';
import { NewsBox } from './news-box.component';

@Component({
    selector: 'news-display',
    templateUrl: 'html/news-display.component.html',
    styleUrls: ['css/news-display.component.css'],
    directives: [ NewsBox ]
})
export class NewsDisplay { 

	newsarticles: News[] = [
		{ headline: 'Ost lugter !', story: 'Ost lugter grimt blablabalabalba' },
		{ headline: 'PUI har vundet igen !', story: 'Det andet team lugter grimt' },
		{ headline: 'PUI har vundet EM !', story: 'Europa lugter grimt blablabalabalba' },
		{ headline: 'PUI har vundet VM !', story: 'Hele verden lugter grimt blablabalabalba'}

	]
}
