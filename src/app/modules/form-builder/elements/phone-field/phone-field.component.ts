import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Attribute, BaseFieldComponent } from '../../base/BaseFieldComponent';

interface PhoneFormData {
  type: string;
  label: string;
  placeholder: string;
  cssClass: string;
  labelClass: string;
  initialValue: string;
  minNumber: string;
  maxNumber: string;
  customAttributes: Array<Attribute>;
  required: boolean;
  readOnly: boolean;
  disabled: boolean;
  unique: boolean;
}

@Component({
  selector: 'app-phone-field',
  templateUrl: './phone-field.component.html',
  styleUrls: ['./phone-field.component.scss'],
})
export class PhoneFieldComponent extends BaseFieldComponent<PhoneFormData> {
  constructor(public override fb: FormBuilder, cd: ChangeDetectorRef) {
    super(fb, cd);
  }

  getDefaultFormData(): PhoneFormData {
    return {
      type: 'tel',
      label: 'Phone Label',
      placeholder: '',
      cssClass: '',
      labelClass: '',
      initialValue: '',
      minNumber: '',
      maxNumber: '',
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
      placeholder: [''],
      initialValue: [''],
      minNumber: [''],
      maxNumber: [''],
      customAttributes: fb.array([]),
      required: [false],
      readOnly: [false],
      disabled: [false],
      unique: [false],
    });
  }

  getArrayFormKeys(): Array<keyof PhoneFormData> {
    return [];
  }

  getCheckOptions(): Array<{ label: string; value: keyof PhoneFormData }> {
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
    value: keyof PhoneFormData;
  }> {
    return [
      {
        type: 'text',
        label: 'Label Class',
        value: 'labelClass',
      },
      {
        type: 'text',
        label: 'Placeholder',
        value: 'placeholder',
      },
      {
        type: 'number',
        label: 'Initial Value',
        value: 'initialValue',
      },
      {
        type: 'number',
        label: 'Min Value',
        value: 'minNumber',
      },
      {
        type: 'number',
        label: 'Max Value',
        value: 'maxNumber',
      },
    ];
  }
}
