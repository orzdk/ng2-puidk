import { Component, Input } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Component({
    selector: 'redbox',
    template: `
		<div [ngClass]="boxtype">
				<span *ngIf="header">
					<div class="boxheader">
						{{header}}
					</div>
				</span>
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

}

