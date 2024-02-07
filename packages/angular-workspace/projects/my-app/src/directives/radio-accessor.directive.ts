import { Directive, forwardRef, HostBinding, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Directive({
  selector: '[apRadioAccessor]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioAccessorDirective),
      multi: true,
    },
  ],
})
export class RadioAccessorDirective implements ControlValueAccessor {
  @HostBinding('values') hostValue: any;

  lastValue: any;
  private onChange = (value: any) => {};
  private onTouched = () => {};

  writeValue(value: any) {
    this.hostValue = this.lastValue = value == null ? '' : value;
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }


  @HostListener('clickedRadio', ['$event.detail'])
  _handleInputEvent(value: any) {
    if (JSON.stringify(value.value) !== JSON.stringify(this.lastValue)) {
      this.lastValue = value.value;
      this.onChange(value.value);
      this.onTouched();
    }

    this.lastValue = false
  }
}
