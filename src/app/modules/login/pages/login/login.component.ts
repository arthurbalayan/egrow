import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';

/**
 * This component handles the login page. It validates the email and the password on 'blur'.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    LoginService
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private service: LoginService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email], updateOn: 'blur'}),
      password: new FormControl('', {validators: [Validators.required], updateOn: 'blur'})
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Submits the entered email and password if the format is correct and both values are set.
   * After the request is finished loading is set to false so the button is clickable again.
   */
  onSubmit() {

    this.submitted = true;
    this.loading = true;

    this.service.login(this.f.email.value, this.f.password.value).subscribe(() => {
      this.loading = false;
    });
  }
}
