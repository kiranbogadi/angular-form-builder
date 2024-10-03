import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Attribute, BaseFieldComponent } from '../../base/BaseFieldComponent';

interface TextAreaFormData {
  type: string;
  label: string;
  cssClass: string;
  labelClass: string;
  placeholder: string;
  initialValue: string;
  cols: string;
  rows: string;
  customAttributes: Array<Attribute>;
  required: boolean;
  readOnly: boolean;
  disabled: boolean;
}

@Component({
  selector: 'app-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss'],
})
export class TextareaFieldComponent extends BaseFieldComponent<TextAreaFormData> {
  constructor(public override fb: FormBuilder, cd: ChangeDetectorRef) {
    super(fb, cd);
  }

  getDefaultFormData(): TextAreaFormData {
    return {
      type: 'textarea',
      label: 'Text Area Label',
      cssClass: '',
      labelClass: '',
      placeholder: '',
      initialValue: '',
      cols: '',
      rows: '',
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
      placeholder: [''],
      initialValue: [''],
      cols: [''],
      rows: [''],
      customAttributes: fb.array([]),
      required: [false],
      readOnly: [false],
      disabled: [false],
    });
  }
  getArrayFormKeys(): Array<keyof TextAreaFormData> {
    return [];
  }

  getCheckOptions(): Array<{ label: string; value: keyof TextAreaFormData }> {
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
    value: keyof TextAreaFormData;
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
        type: 'textarea',
        label: 'Initial Value',
        value: 'initialValue',
      },
      {
        type: 'text',
        label: 'Cols',
        value: 'cols',
      },
      {
        type: 'text',
        label: 'Rows',
        value: 'rows',
      },
    ];
  }
}
