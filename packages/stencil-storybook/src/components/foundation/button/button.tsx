import { Component, Prop, h, Host, Element, Event, EventEmitter, AttachInternals, Listen } from '@stencil/core';

import { ButtonColors } from '../../../interfaces'


@Component({
  tag: 'ap-button',
  styleUrl: 'button.scss',
  shadow: true,
  formAssociated: true
})
export class APButton {

  @Element() el: HTMLElement;

  @Event() clickedButton: EventEmitter;

  @Prop() type ?= 'button';
  @Prop() content: string;
  @Prop() color: ButtonColors = 'primary-500';
  @Prop() size ?= 'default';
  @Prop() icon ?: string;
  @Prop() iconPosition ?= 'left';
  @Prop() outlined ?= false;
  @Prop() disabled ?= false;
  @Prop() text ?= false;
  @Prop() iconOnly ?= false;

  // Permet d'attacher tous types d'events relatifs à un formulaire
  @AttachInternals() internals: ElementInternals;

  @Listen('click')
  clickHandler(e) {
    !this.disabled && this.clickedButton.emit(e);

    // Au clic, on indique au formulaire que l'on souhaite submit et angular prend le relais
    (!this.disabled && this.internals.form && this.internals.form !== null) && this.internals.form.requestSubmit();
  }

  componentDidRender() {
    this.disabled ? this.el.setAttribute('disabled', 'true') : this.el.removeAttribute('disabled');
    this.outlined ? this.el.setAttribute('outlined', 'true') : this.el.removeAttribute('outlined');
    this.text ? this.el.setAttribute('text', 'true') : this.el.removeAttribute('text');
    this.iconOnly ? this.el.setAttribute('icon-only', 'true') : this.el.removeAttribute('icon-only');
  }

  render() {
    return <Host
      role="button"
      tabindex={0}
      type={this.type}
      color={this.color}
      size={this.size}
      onKeydown={e => (e.key === 'Enter' || e.code === 'Space') && this.el.click()}
    >
      { this.iconPosition === 'left' && this.icon && this.icon !== '' && !this.iconOnly ? <ap-icon icon={this.icon} size={this.size === 'lg' || this.size === 'default' ? '16' : '12' } color={(this.outlined || this.text) ? this.color : 'white'} /> : '' }
      { !this.iconOnly && this.content }
      { this.iconOnly && <ap-icon icon={this.icon} size={this.size === 'lg' ? '24' : this.size === 'default' ? '16' : '12' } color={(this.outlined || this.text) ? this.color : 'white'} /> }
      { this.iconPosition === 'right' && this.icon && this.icon !== '' && !this.iconOnly ? <ap-icon icon={this.icon} size={this.size === 'lg' || this.size === 'default' ? '16' : '12' } color={(this.outlined || this.text) ? this.color : 'white'} /> : '' }
    </Host>;
  }
}
