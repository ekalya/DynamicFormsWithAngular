import { Component, Input } from '@angular/core';
import { InputControlBase } from './input-control-base.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-input-control',
  templateUrl: './dynamic-form-input-control.component.html',
  styleUrls: ['./dynamic-form-input-control.component.css']
})
export class DynamicFormInputControlComponent {
  @Input() control: InputControlBase<any>;
  @Input() form: FormGroup;
  @Input() options: any[] = [];
  get isValid() { return this.form.controls[this.control.key].valid; }
}
