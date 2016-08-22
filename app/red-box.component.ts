import { Component, Input } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Component({
    selector: 'redbox',
    template: `
		<div [class.redBox]="true"
			 [class.standardBox]="boxtype=='infobox' || boxtype=='bigbox' || boxtype=='newsbox' " 
			 [class.headerBox]="boxtype=='header'"
			 [class.goRight]="boxtype=='infobox'" 
			 [class.goLeft]="boxtype=='bigbox' || boxtype=='newsbox'"
			 [class.goMax]="boxtype=='bigbox'"
			 [class.textCenter]="boxtype=='infobox'"
			 [class.w200]="boxtype=='infobox'">
				<span *ngIf="header"><div class="boxheader">{{header}}</div></span>
				<ng-content></ng-content>
		</div>
    `,
    styleUrls: ['css/red-box.component.css']
})
export class RedBox { 

	@Input() 
	header: string;

	@Input() 
	boxtype: string;

	@Input() 
	boxGo: string;

	@Input() 
	textCenter: string;

	@Input() 
	w200: string;

	@Input() 
	boxMax: string;
}



