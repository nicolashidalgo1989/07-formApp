import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ]
  });

  public person = {
    gender: 'F',
    wantNotifications: false
  }

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorsService
  ){}

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  isValidField(field: string) {
    return this.vs.isValidField(this.myForm, field);
  }

  onSave():void{

    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;

    console.log(this.myForm.value);
    console.log(this.person);

    this.myForm.reset(this.person);

  }

}
