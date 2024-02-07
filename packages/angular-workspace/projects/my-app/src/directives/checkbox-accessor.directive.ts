import { Directive, forwardRef, HostBinding, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Directive({
  selector: '[apCheckboxAccessor]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxAccessorDirective),
      multi: true,
    },
  ],
})
export class CheckboxAccessorDirective implements ControlValueAccessor {
  @HostBinding('value') hostValue: any;

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


  @HostListener('clickedCheckbox', ['$event.detail'])
  _handleInputEvent(value: any) {
    if (JSON.stringify(value.checked) !== JSON.stringify(this.lastValue)) {
      this.lastValue = value.checked;
      this.onChange(value.checked);
      this.onTouched();
    }
    else {
      this.lastValue = false
    }
  }
}
