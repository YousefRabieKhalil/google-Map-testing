import { Component, Input } from '@angular/core';

/**
 * Component in charge of lazy load images and cache them
 */
@Component({
  selector: 'op-lazy-img',
  template: `
  <div  [ngClass]="{ 'placeholder': placeholderActive }" style="height: 100%; width:100%">
    <img op-lazy-img [source]="source" (load)="placeholderActive = false"/>
  </div>
  `,
  //styleUrls: [ './global/img-cache/lazy-img.component.scss' ]
})
export class LazyImgComponent {

  @Input()
  public source: string;

  public placeholderActive: boolean = true;

}
