import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Attribute, BaseFieldComponent } from '../../base/BaseFieldComponent';

interface HiddenFormData {
  type: string;
  label: string;
  cssClass: string;
  initialValue: string;
  customAttributes: Array<Attribute>;
  required: boolean;
  unique: boolean;
}

@Component({
  selector: 'app-hidden-field',
  templateUrl: './hidden-field.component.html',
  styleUrls: ['./hidden-field.component.scss'],
})
export class HiddenFieldComponent extends BaseFieldComponent<HiddenFormData> {
  constructor(public override fb: FormBuilder, cd: ChangeDetectorRef) {
    super(fb, cd);
  }

  getDefaultFormData(): HiddenFormData {
    return {
      type: 'hidden',
      label: '',
      cssClass: '',
      initialValue: '',
      customAttributes: [],
      required: false,
      unique: false,
    };
  }
  getInputForm(fb: FormBuilder) {
    return fb.group({
      type: [''],
      label: [''],
      cssClass: [''],
      initialValue: [''],
      customAttributes: fb.array([]),
      required: [false],
      unique: [false],
    });
  }
  getArrayFormKeys(): Array<keyof HiddenFormData> {
    return [];
  }

  getCheckOptions(): Array<{ label: string; value: keyof HiddenFormData }> {
    return [
      {
        label: 'Required',
        value: 'required',
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
    value: keyof HiddenFormData;
  }> {
    return [
      {
        type: 'text',
        label: 'Initial Value',
        value: 'initialValue',
      },
    ];
  }
}
