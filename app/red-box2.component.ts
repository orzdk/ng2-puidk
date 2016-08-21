import { Component, Input } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Component({
    selector: 'redbox2',
    template: `
		<div [class.redBox]="true"
			 [class.standardBox]="boxtype=='standard'" 
			 [class.headerBox]="boxtype=='header'"
			 [class.goRight]="boxGo=='right'" 
			 [class.goLeft]="boxGo=='left'"
			 [class.goMax]="boxMax=='yes'"
			 [class.textCenter]="textCenter=='yes'"
			 [class.w200]="w200=='yes'">
				<span *ngIf="header"><div class="boxheader">{{header}}</div><br></span>
				<ng-content></ng-content>
		</div>
    `,
    styleUrls: ['css/red-box2.component.css']
})
export class RedBox2 { 

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



@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}


