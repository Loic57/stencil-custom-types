/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'ap-web-components';


@ProxyCmp({
  inputs: ['color', 'content', 'disabled', 'icon', 'iconOnly', 'iconPosition', 'outlined', 'size', 'text', 'type']
})
@Component({
  selector: 'ap-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'content', 'disabled', 'icon', 'iconOnly', 'iconPosition', 'outlined', 'size', 'text', 'type'],
})
export class ApButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickedButton']);
  }
}


export declare interface ApButton extends Components.ApButton {

  clickedButton: EventEmitter<CustomEvent<any>>;
}


