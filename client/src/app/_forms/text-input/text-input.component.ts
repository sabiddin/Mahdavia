import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
/**
 * Here we will be creating a resuable text control so that our forms should become more organized
 * Step 1: make your component implement ControlValueAccessor instead of OnInit
 *          Once you do so you need to provide the implementation for 3 reruired methods
 *          1.writeValue 2.registerOnChange 3registerOnTouched and remove the setDisabledState as its not required
 *          but you can use it if you need if for your use case.
 * Step 2: You do not need to provide the implementations for these functions as the control value accessor will provude that.
 * Step 3: Add the input properties to your control that you can make use in the template ex: label and type.
 * Step 4: Add a special decorator in the constructor called @  to make your control self contained and inject ng control
 *         and assign ngControl.valueAccessor it to this.
 * 
 */
export class TextInputComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() type = 'text';
  constructor(@Self() public ngControl: NgControl) { 
    this.ngControl.valueAccessor = this;
  }
  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  ngOnInit(): void {
  }

}
