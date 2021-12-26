import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    email: [, [Validators.required, Validators.email]],
    password: [, [Validators.required, Validators.minLength(6)]],
    password2: [, [Validators.required]],

  }, {
    validators: [this.validatorService.camposIguales('password', 'password2')]
  }
  )

  constructor(private fb: FormBuilder, private validatorService: ValidatorService) { }
  ngOnInit(): void {
  }
  registrar() {
    console.log(this.loginFormulario.value);

  }

}
