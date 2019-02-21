import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }  from '@angular/forms';
 
import { InputControlBase }  from './input-control-base.model';
import { InputControlService }    from './input-control.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
 
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ InputControlService ]
})
export class DynamicFormComponent implements OnInit {
  @Input() public controls: InputControlBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
 
  constructor(
    private ics: InputControlService,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef) {}
 
  ngOnInit() {
    if(this.config.data.controls){
      this.controls = this.config.data.controls;
    }
    this.form = this.ics.toFormGroup(this.controls);
  }
 
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.ref.close(this.form);
  }
}