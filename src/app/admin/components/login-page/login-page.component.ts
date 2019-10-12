import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { User } from '../../../shared/interfaces';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  hidePassword = true;

  form: FormGroup

  constructor() { }
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    });
  }


  getErrorMessageForEmail() {
    if(this.form.get('email').hasError('required')){
      return 'email is required'
    } else if(this.form.get('email').hasError('email')){
      return 'email is not valid'
    } else {
      return 'unknown'
    }
  }

  getErrorMessageForPassword(){
    if(this.form.get('password').hasError('required')){
      return 'password is required'
    } else if(this.form.get('password').hasError('minlength')){
      return `password should be more or equal then ${this.form.get('password').errors.minlength.requiredLength} you enter ${this.form.get('password').errors.minlength.actualLength} symbol`
    } else if(this.form.get('password').hasError('maxlength')){
      return `password should be less or equal then ${this.form.get('password').errors.maxlength.requiredLength} you enter ${this.form.get('password').errors.maxlength.actualLength} symbol`
    }
    return 'unknown'
  }

  submit(){
    if(this.form.invalid) return 
    
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    }
    console.log(user)


  }
}

// errors:
// minlength:
// actualLength: 5
// requiredLength: 6
// __proto__: Object
// __proto__: Object