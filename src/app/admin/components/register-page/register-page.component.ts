import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      passwordConfirm: new FormControl('', [Validators.required, this.checkPasswordsIsMatch.bind(this)]),
    })
  }

  checkPasswordsIsMatch(){
    if(this.form){
      if(this.form.get('password').value === this.form.get('passwordConfirm').value){
        return null
      } 
      return {passwordDoNotMatch: true}
      // console.log('true')
    }
  }

  getErrorMessageForName() {
    if(this.form.get('name').hasError('required')){
      return 'name is required'
    } else if(this.form.get('name').hasError('minlength')){
      return `name should be more or equal then ${this.form.get('name').errors.minlength.requiredLength} you enter ${this.form.get('name').errors.minlength.actualLength} symbol`
    } else if(this.form.get('name').hasError('maxlength')){
      return `name should be less or equal then ${this.form.get('name').errors.maxlength.requiredLength} you enter ${this.form.get('name').errors.maxlength.actualLength} symbol`
    } else {
      return 'unknown'
    }
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
  getErrorMessageForPasswordConfirm(){
    if(this.form.get('passwordConfirm').hasError('required')){
      return 'passwordConfirm is required'
    } else if(this.form.get('passwordConfirm').hasError('passwordDoNotMatch')){
      return 'Password do not match'
    } else {
      return 'unknown'
    }
  }

  // ValidatorsPasswordConfirmIsMatch(){
  //   console.log('ggg')
  //   return null
  // }

  submit(){
    const {name, email, password} = this.form.value
    this.auth.register({name, email, password})
      .subscribe(res => {
        console.log('res')
        console.log(res)
      })
  }

}

// {kind: "identitytoolkit#SignupNewUserResponse", idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ2YzM5Mzc4YWVmYzA2Yz…2oRvFweerDNQw-WWvLtYdiq9Ipbdb8B7dPcD7R7qlV_8Ifndw", email: "kine4599@gmail.com", refreshToken: "AEu4IL1Tzx4QIY2WPoowJ7MUgLh0WhOAvXi_5YhHAFoLoirrvv…oUL95__MqjrDeXN1NHZ3cxrLahBWZ8X7khBb-NkshVUtERwqO", expiresIn: "3600", …}
// email: "kine4599@gmail.com"
// expiresIn: "3600"
// idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ2YzM5Mzc4YWVmYzA2YzQyYTJlODI1OTA0ZWNlZDMwODg2YTk5MjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20va3Jvbi1ibG9nIiwiYXVkIjoia3Jvbi1ibG9nIiwiYXV0aF90aW1lIjoxNTcxMDYxNzQ3LCJ1c2VyX2lkIjoiNlpjNDZiOEw1VVVPQ2RkM2xCMUxCcmlOZWxGMiIsInN1YiI6IjZaYzQ2YjhMNVVVT0NkZDNsQjFMQnJpTmVsRjIiLCJpYXQiOjE1NzEwNjE3NDcsImV4cCI6MTU3MTA2NTM0NywiZW1haWwiOiJraW5lNDU5OUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsia2luZTQ1OTlAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.sh6k69APU1BjVVL2wfvMqRKTFasc65BdMAs6mpGEA8aDbDDQOk_T6bRET2L5sa7t6MEsf--XV5WiT00mSsmrA35eJxbNzPJHDRHYUPiZL33GpFqfPlEgwJ9aguZs8urcz6-mv0gkBVQGKTAqymfRNHMggDQf06_kIoMV9yuThGHk2PDhEBE4nwXDt7a4Pk_ojOgYM225DXHl9uw0pcFLnLGTrWiLgdnUPDSB_7Ij31ZXaZt_W92HEwH5HLpUY4R__HyE-9OdnhWCLLlwfgORV3Cn8FIFP2xRa0Hgw2oRvFweerDNQw-WWvLtYdiq9Ipbdb8B7dPcD7R7qlV_8Ifndw"
// kind: "identitytoolkit#SignupNewUserResponse"
// localId: "6Zc46b8L5UUOCdd3lB1LBriNelF2"
// refreshToken: "AEu4IL1Tzx4QIY2WPoowJ7MUgLh0WhOAvXi_5YhHAFoLoirrvv3c47oSP76Tfk9neLrYaRKh2ipcOLvOs28PHU4xm9hu8pvtZXNQnXHbgMd-CCV99-Z4Ggjh9lpTZAt4-Eys8MHdL_-0aIbkOm2aTeO57HgoUL95__MqjrDeXN1NHZ3cxrLahBWZ8X7khBb-NkshVUtERwqO"
// __proto__: Object

// {kind: "identitytoolkit#SignupNewUserResponse", idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ2YzM5Mzc4YWVmYzA2Yz…AqACXFJm8tSH5XAGbVslUL4nFC_wXYdJ76q1KD5STw2MNzwVQ", email: "kine45991@gmail.com", refreshToken: "AEu4IL2zg4szVdj9j_IwJor6_mDAEsCcb1wDYLucZJ1atVm7FN…93O8NTBP9iUyzRi7_Y-yOLCohbnjxdcQuEh42hq7r_q_Oclsq", expiresIn: "3600", …}
// email: "kine45991@gmail.com"
// expiresIn: "3600"
// idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ2YzM5Mzc4YWVmYzA2YzQyYTJlODI1OTA0ZWNlZDMwODg2YTk5MjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20va3Jvbi1ibG9nIiwiYXVkIjoia3Jvbi1ibG9nIiwiYXV0aF90aW1lIjoxNTcxMDYxODMzLCJ1c2VyX2lkIjoiZGtNbmVQNzZFUk1XZVBIQ1Vtd3FtMFkzcmlLMiIsInN1YiI6ImRrTW5lUDc2RVJNV2VQSENVbXdxbTBZM3JpSzIiLCJpYXQiOjE1NzEwNjE4MzMsImV4cCI6MTU3MTA2NTQzMywiZW1haWwiOiJraW5lNDU5OTFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImtpbmU0NTk5MUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.MBhoOrSkpTTZYk7Lb6Yz9c1Mba15Km2ASwvRKjSA95TeU8Oa7CsZp6Vt4LUtl0BeiJcEAZDRErclZymIQsLUZUpQLuY5TheyozKYqXO9VcTOpda65DYNC4AUMy5mg97UW_W7tMrgZXynhKk2K4IZYUFNVCVZutVlyEksWBfw2YwE6bGeMNODr1W-h3c2OD8bUPL-J87tHoLViB-uhJ93x7a0FArbo3guiAVN77c0tuI0CMxpvLk_0qlQUJMc1QXneYByQBvljRVi-9caSXmirqPgDXSw3lbDiz5UcAqACXFJm8tSH5XAGbVslUL4nFC_wXYdJ76q1KD5STw2MNzwVQ"
// kind: "identitytoolkit#SignupNewUserResponse"
// localId: "dkMneP76ERMWePHCUmwqm0Y3riK2"
// refreshToken: "AEu4IL2zg4szVdj9j_IwJor6_mDAEsCcb1wDYLucZJ1atVm7FNpAzQXNR_Sd9wSyfoJEgbi8VcBZBfyhs-funCkbMzeTvBBCOgiDNYyEgdRdI_hDce2I4MqJpA5mrszSiyrEjwh3nXfSIvy0ZziD6ImAf4Q93O8NTBP9iUyzRi7_Y-yOLCohbnjxdcQuEh42hq7r_q_Oclsq"
// __proto__: Object