import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  camposIguales(campo1: string, campo2: string) {
    return (control: AbstractControl): ValidationErrors | null => {

      const pas1 = control.get(campo1)?.value
      const pas2 = control.get(campo2)?.value
      if (pas1 !== pas2) {
        control.get(campo2)?.setErrors({ noIguales: true })
        return { noIguales: true }
      }
      control.get(campo2)?.setErrors(null)

      return null
    }
  }




}
