import { Component } from '@angular/core';
import { Member } from './class/member.class';

@Component({
    selector: 'team-pictures',
    templateUrl: 'html/team-picture.component.html',
    styleUrls: ['css/team-picture.component.css']
})
export class TeamPictures { 

	team: Member[] = [

		{ name: 'Urtestuen', picture: 'img/anon-male.jpg' },
		{ name: 'ElGuapoDK', picture: 'img/anon-male.jpg' },
		{ name: 'Batman', picture: 'img/anon-male.jpg' },
		{ name: 'Supermand', picture: 'img/anon-male.jpg' },
		{ name: 'Rorschach', picture: 'img/anon-male.jpg' },
		{ name: 'Dr Manhattan', picture: 'img/anon-male.jpg' },

	]

}
