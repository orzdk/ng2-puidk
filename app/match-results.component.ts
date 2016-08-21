import { Component } from '@angular/core';
import { MatchResult } from './class/matchresult.class';
import { RedBox2 } from './red-box2.component';

@Component({
    selector: 'match-results',
    templateUrl: 'html/match-results.component.html',
    styleUrls: ['css/match-results.component.css'],
    directives: [ RedBox2 ]
})
export class MatchResults { 
		results: MatchResult[] = [

		{ team1: 'PUI', team2: 'Team Redbull', result:'win'},
		{ team1: 'PUI', team2: 'Team NemID', result:'win'},
		{ team1: 'PUI', team2: 'Team Skrivebord', result:'tied'},
		{ team1: 'PUI', team2: 'Team Kildevand', result:'tied'},
		{ team1: 'PUI', team2: 'Team Gamepad', result:'loss'},
		{ team1: 'PUI', team2: 'Team Usbkey', result:'loss'}
	]
}
