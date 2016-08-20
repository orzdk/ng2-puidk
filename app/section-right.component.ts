import { Component } from '@angular/core';

@Component({
    selector: 'section-right',
    template: '<div class="gorightandbe200"><ng-content></ng-content></div>',
    styles  : ['.gorightandbe200 {float:right;width:200px;}']

})
export class SectionRight { 

}
