import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Attribute, BaseFieldComponent } from '../../base/BaseFieldComponent';

interface SelectFormData {
  type: string;
  label: string;
  cssClass: string;
  labelClass: string;
  selectOptions: Array<Attribute>;
  customAttributes: Array<Attribute>;
  required: boolean;
  readOnly: boolean;
  disabled: boolean;
}

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
})
export class SelectFieldComponent extends BaseFieldComponent<SelectFormData> {
  constructor(public override fb: FormBuilder, cd: ChangeDetectorRef) {
    super(fb, cd);
  }

  getDefaultFormData(): SelectFormData {
    return {
      type: 'select',
      label: 'Select Label',
      cssClass: '',
      labelClass: '',
      selectOptions: [
        {
          key: 'Option 1',
          value: '',
          image: '',
          selected: false,
        },
        {
          key: 'Option 2',
          value: '',
          image: '',
          selected: false,
        },
      ],
      customAttributes: [],
      required: false,
      readOnly: false,
      disabled: false,
    };
  }
  getInputForm(fb: FormBuilder) {
    return fb.group({
      type: [''],
      label: [''],
      cssClass: [''],
      labelClass: [''],
      selectOptions: fb.array([]),
      customAttributes: fb.array([]),
      required: [false],
      readOnly: [false],
      disabled: [false],
    });
  }
  getArrayFormKeys(): Array<keyof SelectFormData> {
    return ['selectOptions'];
  }

  getCheckOptions(): Array<{ label: string; value: keyof SelectFormData }> {
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
    ];
  }

  getInputFields(): Array<{
    type: string;
    label: string;
    value: keyof SelectFormData;
  }> {
    return [
      {
        type: 'text',
        label: 'Label Class',
        value: 'labelClass',
      },
    ];
  }
}
