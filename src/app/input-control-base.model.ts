export class InputControlBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    keyFilter: string;
   
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        keyFilter?: string;
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.keyFilter = options.keyFilter || '';
    }
}
