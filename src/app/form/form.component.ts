import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../confirmed.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form: FormGroup = new FormGroup({});

  constructor(form: FormBuilder) {

    this.form = form.group({
      email: ['',[Validators.required,Validators.pattern( '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required,Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],
      confirm_password: ['', [Validators.required]]
    }, {
      // validator: ConfirmedValidator('password', 'confirm_password')
    })
  }


  get pass(){
    return this.form.controls;
  }

  // get email(){
  //   return this.form.controls;
  // }

  submit(){
    console.table(this.form.value);
    // return this.form.reset;

  }


}
