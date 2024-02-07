import { Directive, forwardRef, HostBinding, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Directive({
  selector: '[apInputAccessor]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputAccessorDirective),
      multi: true,
    },
  ],
})
export class InputAccessorDirective implements ControlValueAccessor {
  @HostBinding('value') hostValue: any;

  lastValue: any;
  private onChange = (value: any) => {};
  private onTouched!: () => void;

  writeValue(value: any) {
    this.hostValue = this.lastValue = value == null ? '' : value;
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    console.log('registerOnTouched')
    this.onTouched = fn;
  }

  @HostListener('inputTyping', ['$event.detail'])
  _handleInputEvent(value: any) {
    if (JSON.stringify(value) !== JSON.stringify(this.lastValue)) {
      this.lastValue = value;
      this.onChange(value);
      this.onTouched();
    }
    else {
      this.lastValue = false
    }
  }
}
