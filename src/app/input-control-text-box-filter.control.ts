import { InputControlBase } from './input-control-base.model';

export class InputControlTextBoxFilter extends InputControlBase<string> {
        controlType = 'textboxfilter';
        type: string;
      
        constructor(options: {} = {}) {
          super(options);
          this.type = options['type'] || '';
        }
}
