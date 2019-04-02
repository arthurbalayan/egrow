import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AsinInputComponent} from './asin-input/asin-input.component';
import {AsinInputValidatorDirective} from './asin-input/asin-input-validator.directive';
import {AsinInputPipe} from './asin-input/asin-input.pipe';

/**
 * This module includes all components and services which are used across the
 * member area in different tools. It needs to be imported by the tool module
 * to be able to use its components.
 */
@NgModule({
  declarations: [
    AsinInputComponent,
    AsinInputValidatorDirective,
    AsinInputPipe
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [
    AsinInputComponent
  ]
})
export class SharedMemberModule { }
