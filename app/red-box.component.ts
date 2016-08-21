import { Component, Input } from '@angular/core';

@Component({
    selector: 'redbox',
    template: `
		<span><div class="box right center red">{{boxtype}}<ng-content></ng-content></div></span>
    `
})
export class RedBox { 

	@Input()
	boxtype: string;

}
