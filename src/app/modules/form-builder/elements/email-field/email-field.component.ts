import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Attribute, BaseFieldComponent } from '../../base/BaseFieldComponent';

interface EmailFormData {
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
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.scss'],
})
export class EmailFieldComponent extends BaseFieldComponent<EmailFormData> {
  constructor(public override fb: FormBuilder, cd: ChangeDetectorRef) {
    super(fb, cd);
  }

  getDefaultFormData(): EmailFormData {
    return {
      type: 'email',
      label: 'Email Label',
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
      cssClass: [''],
      labelClass: [''],
      placeholder: [''],
      initialValue: [''],
      customAttributes: fb.array([]),
      required: [false],
      readOnly: [false],
      disabled: [false],
      unique: [false],
    });
  }
  getArrayFormKeys(): Array<keyof EmailFormData> {
    return [];
  }

  getCheckOptions(): Array<{ label: string; value: keyof EmailFormData }> {
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
    value: keyof EmailFormData;
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
