import { Injectable } from '@angular/core';
import { InputControlBase } from './input-control-base.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InputControlService {

  constructor() { }
  toFormGroup(controls: InputControlBase<any>[] ) {
    let group: any = {};

    controls.forEach(control => {
      group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
                                              : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }
}
