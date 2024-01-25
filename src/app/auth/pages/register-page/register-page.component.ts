import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: [ '', [Validators.required, Validators.pattern(this.vs.firstNameAndLastnamePattern )] ],
    email: [ '', [Validators.required, Validators.pattern(this.vs.emailPattern) ] ],
    username: [ '', [Validators.required, this.vs.cantBeStrider ] ],
    password: [ '', [Validators.required, Validators.minLength(6) ] ],
    password2: [ '', [Validators.required ] ]
  })

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorsService
  ){}

  isValidField(field:string){
    return this.vs.isValidField( this.myForm, field)
  }

  onSubmit(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);

  }

}
