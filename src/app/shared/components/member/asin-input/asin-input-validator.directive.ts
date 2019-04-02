import {Directive, ElementRef, HostListener} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {AsinInputPipe} from './asin-input.pipe';

const ASIN_REGEX: RegExp = new RegExp('^(B[0-9A-Z]{2}[0-9A-Z]{7}|[0-9]{9}(X|[0-9]))$');

/**
 * This directive validates the format of an ASIN string. It can be applied
 * to any input text field.
 */
@Directive({
  selector: '[AsinInputValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: AsinInputValidatorDirective, multi: true}, AsinInputPipe
  ]
})
export class AsinInputValidatorDirective implements Validator {

  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef, private asinPipe: AsinInputPipe) {
    this.el = this.elementRef.nativeElement;
  }

  validate(control: AbstractControl): ValidationErrors | null {

    const asin: string = control.value;

    const isAsinValid = ASIN_REGEX.test(asin);

    let errors: ValidationErrors;

    if (!isAsinValid) {
      errors = <ValidationErrors>{asinInvalid: true, asinValid: false};
    }

    return errors;
  }

  /**
   * Whenever the host is an input field and the value is changed this function
   * is triggered. It sets the value of the input field to the transformed
   * value (ASIN extracted from an url).
   * @param value the entered url or just text.
   */
  @HostListener('input', ['$event.target.value'])
  onInput(value) {
    this.el.value = this.asinPipe.transform(value);
  }
}
