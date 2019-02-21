import { Injectable } from '@angular/core';
import { InputControlBase } from './input-control-base.model';
import { InputControlTextBox } from './input-control-text-box.model';

@Injectable({
  providedIn: 'root'
})
export class TasksUIService {
  constructor() { }

  getUIControls() {
 
    let controls: InputControlBase<any>[] = [

      new InputControlTextBox({
        key: 'name',
        label: 'Name',
        value: '',
        required: true,
        order: 1
      }),
 
      new InputControlTextBox({
        key: 'description',
        label: 'Description',
        type: 'text',
        order: 2
      })
    ];
 
    return controls.sort((a, b) => a.order - b.order);
  }
}
