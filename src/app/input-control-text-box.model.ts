import { InputControlBase } from './input-control-base.model';

export class InputControlTextBox extends InputControlBase<string> {
        controlType = 'textbox';
        type: string;
      
        constructor(options: {} = {}) {
          super(options);
          this.type = options['type'] || '';
        }
}
