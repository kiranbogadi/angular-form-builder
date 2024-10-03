import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Attribute, BaseFieldComponent } from '../../base/BaseFieldComponent';

interface PasswordFormData {
  type: string;
  label: string;
  placeholder: string;
  cssClass: string;
  labelClass: string;
  initialValue: string;
  customAttributes: Array<Attribute>;
  required: boolean;
  readOnly: boolean;
  disabled: boolean;
  unique: boolean;
}

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss'],
})
export class PasswordFieldComponent extends BaseFieldComponent<PasswordFormData> {
  constructor(public override fb: FormBuilder, cd: ChangeDetectorRef) {
    super(fb, cd);
  }

  getDefaultFormData(): PasswordFormData {
    return {
      type: 'password',
      label: 'Password Label',
      cssClass: '',
      labelClass: '',
      placeholder: '',
      initialValue: '',
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
      placeholder: [''],
      cssClass: [''],
      labelClass: [''],
      initialValue: [''],
      customAttributes: fb.array([]),
      required: [false],
      readOnly: [false],
      disabled: [false],
      unique: [false],
    });
  }
  getArrayFormKeys(): Array<keyof PasswordFormData> {
    return [];
  }

  getCheckOptions(): Array<{ label: string; value: keyof PasswordFormData }> {
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
    value: keyof PasswordFormData;
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
        type: 'text',
        label: 'Initial Value',
        value: 'initialValue',
      },
    ];
  }
}
