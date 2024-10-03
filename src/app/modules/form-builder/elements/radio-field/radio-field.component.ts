import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Attribute, BaseFieldComponent } from '../../base/BaseFieldComponent';

interface RadioFormData {
  type: string;
  label: string;
  cssClass: string;
  labelClass: string;
  radioOptions: Array<Attribute>;
  customAttributes: Array<Attribute>;
  required: boolean;
  readOnly: boolean;
  disabled: boolean;
}

@Component({
  selector: 'app-radio-field',
  templateUrl: './radio-field.component.html',
  styleUrls: ['./radio-field.component.scss'],
})
export class RadioFieldComponent extends BaseFieldComponent<RadioFormData> {
  constructor(public override fb: FormBuilder, cd: ChangeDetectorRef) {
    super(fb, cd);
  }

  getDefaultFormData(): RadioFormData {
    return {
      type: 'radio',
      label: 'Radio Label',
      cssClass: '',
      labelClass: '',
      radioOptions: [
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
      radioOptions: fb.array([]),
      customAttributes: fb.array([]),
      required: [false],
      readOnly: [false],
      disabled: [false],
    });
  }
  getArrayFormKeys(): Array<keyof RadioFormData> {
    return ['radioOptions'];
  }

  getCheckOptions(): Array<{ label: string; value: keyof RadioFormData }> {
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
    value: keyof RadioFormData;
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
