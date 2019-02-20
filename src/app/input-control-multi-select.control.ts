import { InputControlBase } from './input-control-base.model';

export class InputControlMultiSelect extends InputControlBase<any[]> {
    controlType = 'multiselect';
    options: {key: string, value: string}[] = [];
  
    constructor(options: {} = {}) {
      super(options);
      this.options = options['options'] || [];
      this.controlType = options['type'] || 'dropdown';
    }
}
