import { Component, Input } from '@angular/core';
import { Member } from './class/member.class';

@Component({
    selector: 'team-picture-box',
    template:`
		<figure class="red">
			<img src="{{picture}}" alt="Name" class="profile">
			<figcaption>{{name}}</figcaption>
		</figure>

    `,
    styleUrls: ['css/team-picture-box.component.css']
})
export class TeamPictureBox { 

	@Input()
	picture:string;

	@Input()
	name:string;


}
