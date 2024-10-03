import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Attribute, BaseFieldComponent } from '../../base/BaseFieldComponent';

interface CheckFormData {
  type: string;
  label: string;
  cssClass: string;
  labelClass: string;
  checkOptions: Array<Attribute>;
  customAttributes: Array<Attribute>;
  required: boolean;
  readOnly: boolean;
  disabled: boolean;
}

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss'],
})
export class CheckboxFieldComponent extends BaseFieldComponent<CheckFormData> {
  constructor(public override fb: FormBuilder, cd: ChangeDetectorRef) {
    super(fb, cd);
  }

  getDefaultFormData(): CheckFormData {
    return {
      type: 'checkbox',
      label: 'Checkbox Label',
      cssClass: '',
      labelClass: '',
      checkOptions: [
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
      checkOptions: fb.array([]),
      customAttributes: fb.array([]),
      required: [false],
      readOnly: [false],
      disabled: [false],
    });
  }
  getArrayFormKeys(): Array<keyof CheckFormData> {
    return ['checkOptions'];
  }

  getCheckOptions(): Array<{ label: string; value: keyof CheckFormData }> {
    return [
      {
        label: 'Required',
        value: 'required',
      },
      {
        label: 'Disabled',
        value: 'disabled',
      },
    ];
  }

  getInputFields(): Array<{
    type: string;
    label: string;
    value: keyof CheckFormData;
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
