import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Attribute, BaseFieldComponent } from '../../base/BaseFieldComponent';

interface ColorFormData {
  type: string;
  label: string;
  cssClass: string;
  labelClass: string;
  initialValue: string;
  customAttributes: Array<Attribute>;
  required: boolean;
  readOnly: boolean;
  disabled: boolean;
}

@Component({
  selector: 'app-color-field',
  templateUrl: './color-field.component.html',
  styleUrls: ['./color-field.component.scss'],
})
export class ColorFieldComponent extends BaseFieldComponent<ColorFormData> {
  constructor(public override fb: FormBuilder, cd: ChangeDetectorRef) {
    super(fb, cd);
  }

  getDefaultFormData(): ColorFormData {
    return {
      type: 'color',
      label: 'Color Label',
      cssClass: '',
      labelClass: '',
      initialValue: '',
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
      placeholder: [''],
      cssClass: [''],
      labelClass: [''],
      initialValue: [''],
      customAttributes: fb.array([]),
      required: [false],
      readOnly: [false],
      disabled: [false],
    });
  }
  getArrayFormKeys(): Array<keyof ColorFormData> {
    return [];
  }

  getCheckOptions(): Array<{ label: string; value: keyof ColorFormData }> {
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
    value: keyof ColorFormData;
  }> {
    return [
      {
        type: 'text',
        label: 'Label Class',
        value: 'labelClass',
      },
      {
        type: 'color',
        label: 'Initial Value',
        value: 'initialValue',
      },
    ];
  }
}
