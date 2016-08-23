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
		{ headline: 'PUI won the game', story: 'PUI rulez the round !' },
		{ headline: 'PUI won the tournament', story: 'PUI rulez the tournament !' },
		{ headline: 'PUI won the big one', story: 'PUI rulez the world !' },
		{ headline: 'PUI won it all', story: 'PUI rulez the universe !'}

	]
}
