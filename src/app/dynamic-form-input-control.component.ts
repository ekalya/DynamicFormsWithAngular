import { Component, OnInit, Input } from '@angular/core';
import { InputControlBase } from './input-control-base.model';
import { FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/components/common/selectitem';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
  selector: 'app-dynamic-form-input-control',
  templateUrl: './dynamic-form-input-control.component.html',
  styleUrls: ['./dynamic-form-input-control.component.css']
})
export class DynamicFormInputControlComponent implements OnInit {
  @Input() control: InputControlBase<any>;
  @Input() form: FormGroup;
  @Input() options: any[] = [];
  ngOnInit(): void {
    this.refreshSource();
  }
  get isValid() { return this.form.controls[this.control.key].valid; }
  onMoveToTarget(items: any[]){
    this.refreshSource();
  }
  refreshSource(){
    if (this.options === undefined || this.control.value === undefined) {
      return;
    }
    
    this.options.filter(o => this.control.value.filter(si => si.label === o.label).length === 0);
  }
}
