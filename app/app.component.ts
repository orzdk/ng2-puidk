import { Component } from '@angular/core';
import { PuiBanner } from './pui-banner.component';
import { TeamPictures } from './team-picture.component';
import { MatchResults } from './match-results.component';
import { NewsDisplay } from './news-display.component';
import { LoginBox } from './login-box.component';
import { InformationBox } from './information-box.component';
import { SectionRight } from './section-right.component';

@Component({
    selector: 'my-app',
    templateUrl: 'html/app.component.html',
    styleUrls: ['css/app.component.css'],
    directives: [PuiBanner, TeamPictures, MatchResults, NewsDisplay, LoginBox, InformationBox, SectionRight]
})
export class AppComponent { 
	title:string = "PUI 2016";
}
