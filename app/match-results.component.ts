import { Component } from '@angular/core';
import { MatchResult } from './class/matchresult.class';
import { RedBox } from './red-box.component';

@Component({
    selector: 'match-results',
    templateUrl: 'html/match-results.component.html',
    styleUrls: ['css/match-results.component.css'],
    directives: [ RedBox ]
})
export class MatchResults { 
		results: MatchResult[] = [

		{ team1: 'PUI', team2: 'Team Redbull', result:'win'},
		{ team1: 'PUI', team2: 'Team Test', result:'win'},
		{ team1: 'PUI', team2: 'Team Ohhlongjohnson', result:'tied'},
		{ team1: 'PUI', team2: 'Team OhDoonpiano', result:'tied'},
		{ team1: 'PUI', team2: 'Team Senôr Ding-dong', result:'loss'},
		{ team1: 'PUI', team2: 'Team Apu', result:'loss'}
	]
}
