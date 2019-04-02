import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {AdvancedErrorStateMatcher} from '../../../classes/advanced-error-state-matcher';

/**
 * This component represents an input field which expects an ASIN to be entered.
 * It has an asinProvider as output which sends out a ASIN when the input is valid
 * or undefined when it is not valid.
 * An ASIN can be set during initialization via an external input.
 */
@Component({
  selector: 'app-asin-input',
  templateUrl: './asin-input.component.html',
  styleUrls: ['./asin-input.component.css']
})
export class AsinInputComponent implements OnInit {

  @Output() asinProvider = new EventEmitter<string>();

  @Input() set asin(asin: string) { // Used for external one time setup
    if (null != asin && 0 === this.asinFormControl.value.length) {
      this.asinFormControl.setValue(asin);
    }
  }

  asinFormControl: FormControl;
  matcher: ErrorStateMatcher;

  constructor() {
    this.asinFormControl = new FormControl('', [Validators.required]);
    this.matcher = new AdvancedErrorStateMatcher();
  }

  ngOnInit() {
    this.asinFormControl.statusChanges.subscribe(() => {
      let asin;
      if (this.asinFormControl.valid) {
        asin = this.asinFormControl.value;
      }
      this.asinProvider.emit(asin);
    });
  }
}
