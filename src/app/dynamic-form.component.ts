import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }  from '@angular/forms';
 
import { InputControlBase }  from './input-control-base.model';
import { InputControlService }    from './input-control.service';
 
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ InputControlService ]
})
export class DynamicFormComponent implements OnInit {
 
  @Input() controls: InputControlBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
 
  constructor(private ics: InputControlService) {  }
 
  ngOnInit() {
    this.form = this.ics.toFormGroup(this.controls);
  }
 
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}