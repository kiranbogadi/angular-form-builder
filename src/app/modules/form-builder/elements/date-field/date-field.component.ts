import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Attribute, BaseFieldComponent } from '../../base/BaseFieldComponent';

interface DateFormData {
  type: string;
  label: string;
  cssClass: string;
  labelClass: string;
  initialValue: string;
  maxDate: string;
  minDate: string;
  customAttributes: Array<Attribute>;
  required: boolean;
  readOnly: boolean;
  disabled: boolean;
  unique: boolean;
}

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
})
export class DateFieldComponent extends BaseFieldComponent<DateFormData> {
  constructor(public override fb: FormBuilder, cd: ChangeDetectorRef) {
    super(fb, cd);
  }

  getDefaultFormData(): DateFormData {
    return {
      type: 'date',
      label: 'Date Label',
      cssClass: '',
      labelClass: '',
      initialValue: '',
      maxDate: '',
      minDate: '',
      customAttributes: [],
      required: false,
      readOnly: false,
      disabled: false,
      unique: false,
    };
  }
  getInputForm(fb: FormBuilder) {
    return fb.group({
      type: [''],
      label: [''],
      cssClass: [''],
      labelClass: [''],
      initialValue: [''],
      maxDate: [''],
      minDate: [''],
      customAttributes: fb.array([]),
      required: [false],
      readOnly: [false],
      disabled: [false],
      unique: [false],
    });
  }

  getArrayFormKeys(): Array<keyof DateFormData> {
    return [];
  }

  getCheckOptions(): Array<{ label: string; value: keyof DateFormData }> {
    return [
      {
        label: 'Required',
        value: 'required',
      },
      {
        label: 'Disabled',
        value: 'disabled',
      },
      {
        label: 'Read Only',
        value: 'readOnly',
      },
      {
        label: 'Unique',
        value: 'unique',
      },
    ];
  }

  getInputFields(): Array<{
    type: string;
    label: string;
    value: keyof DateFormData;
  }> {
    return [
      {
        type: 'text',
        label: 'Label Class',
        value: 'labelClass',
      },
      {
        type: 'date',
        label: 'Initial Date',
        value: 'initialValue',
      },
      {
        type: 'date',
        label: 'Min Date',
        value: 'minDate',
      },
      {
        type: 'date',
        label: 'Max Date',
        value: 'maxDate',
      },
    ];
  }
}
