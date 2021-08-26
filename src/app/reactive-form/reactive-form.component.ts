import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public frmUser!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }



  createForm(): void {
    this.frmUser = new FormGroup({
      // username : ['', [
      //   Validators.required,
      //   Validators.minLength(5),
      //   Validators.maxLength(20)
      // ]],
      // password : ['', Validators.required],
      // fullname : [''],
      // email : ['', Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')],
      // // phone : ['']
      phone : new FormControl('',Validators.required)
    })

    this.frmUser = this._formBuilder.group({
      username : ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]],
      password : ['', Validators.required],
      fullname : [''],
      email : ['', Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')],
      phone : ['']
    });
    console.log(this.frmUser.controls.username.dirty);

    this.frmUser.valueChanges.subscribe(data =>{
      console.log(this.frmUser.controls.username.dirty);
    });
  }

  onSubmitForm(): void {
    console.log(this.frmUser.value);
    this.frmUser.markAllAsTouched();
  }

  onResetForm(): void {
    this.frmUser.reset();
  }

}
