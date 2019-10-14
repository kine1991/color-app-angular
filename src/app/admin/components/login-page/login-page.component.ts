import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { User } from '../../../shared/interfaces';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  hidePassword = true;
  submitted = false

  form: FormGroup

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
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
    this.submitted = true
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    }
    // console.log(user)

    this.auth.login(user).subscribe(() => {
      this.form.reset()
      this.router.navigate(['/admin', 'dashboard'])
      this.submitted = false
    }, () => {
      this.submitted = false
    })
  }
}

// errors:
// minlength:
// actualLength: 5
// requiredLength: 6
// __proto__: Object
// __proto__: Object