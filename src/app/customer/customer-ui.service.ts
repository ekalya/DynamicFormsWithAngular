import { Injectable } from '@angular/core';
import { InputControlDropdown } from '../input-control-dropdown.model';
import { InputControlBase } from '../input-control-base.model';
import { InputControlTextBox } from '../input-control-text-box.model';
import { InputControlPassword } from '../input-control-password.control';
import { InputDataTypes } from '../input-data-types.enum';
import { InputControlPickList } from '../input-control-pick-list.control';
import { InputControlMultiSelect } from '../input-control-multi-select.control';

@Injectable({
  providedIn: 'root'
})
export class CustomerUIService {

  constructor() { }

  getUIControls() {
 
    let controls: InputControlBase<any>[] = [

      new InputControlTextBox({
        key: 'firstName',
        label: 'First name',
        value: '',
        required: true,
        order: 1
      }),
 
      new InputControlTextBox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        keyFilter: InputDataTypes.Email,
        order: 2
      }),

      new InputControlPassword({
        key: 'Password',
        label: 'Password',
        type: 'password',
        order: 3
      }),

      new InputControlTextBox({
        key: 'age',
        label: 'Age(yrs)',
        type: 'text',
        keyFilter: InputDataTypes["Positive numbers"],
        order: 4
      }),

      new InputControlTextBox({
        key: 'dob',
        label: 'Date of birth',
        type: 'date',
        order: 5
      }),

      new InputControlMultiSelect({
        key: 'cars',
        label: 'Favourite Cars',
        type: 'multiselect',
        value: [],
        options: [
          {value: 'audi', label: 'Audi'},
          {value: 'bmw', label: 'BMW'},
          {value: 'fiat', label: 'Fiat'},
          {value: 'ford', label: 'Ford'},
          {value: 'honda', label: 'Honda'}
        ],
        order: 6
      }),

      new InputControlPickList({
        key: 'toys',
        label: 'Favourite Toys',
        type: 'picklist',
        value: [{value: 'audi', label: 'Audi'},
        {value: 'bmw', label: 'BMW'}],
        options: [
          {value: 'audi', label: 'Audi'},
          {value: 'bmw', label: 'BMW'},
          {value: 'fiat', label: 'Fiat'},
          {value: 'ford', label: 'Ford'},
          {value: 'honda', label: 'Honda'}
        ],
        order: 7
      }),
      new InputControlDropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 8
      })
    ];
 
    return controls.sort((a, b) => a.order - b.order);
  }

}
