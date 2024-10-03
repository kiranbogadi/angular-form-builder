import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Attribute, BaseFieldComponent } from '../../base/BaseFieldComponent';

interface ButtonFormData {
  type: string;
  label: string;
  cssClass: string;
  customAttributes: Array<Attribute>;
  required: boolean;
  disabled: boolean;
}

@Component({
  selector: 'app-button-field',
  templateUrl: './button-field.component.html',
  styleUrls: ['./button-field.component.scss'],
})
export class ButtonFieldComponent extends BaseFieldComponent<ButtonFormData> {
  constructor(public override fb: FormBuilder, cd: ChangeDetectorRef) {
    super(fb, cd);
  }

  getDefaultFormData(): ButtonFormData {
    return {
      type: 'button',
      label: 'Button Text',
      cssClass: '',
      customAttributes: [],
      required: false,
      disabled: false,
    };
  }
  getInputForm(fb: FormBuilder) {
    return fb.group({
      type: [''],
      label: [''],
      cssClass: [''],
      customAttributes: fb.array([]),
      required: [false],
      disabled: [false],
    });
  }
  getArrayFormKeys(): Array<keyof ButtonFormData> {
    return [];
  }

  getCheckOptions(): Array<{ label: string; value: keyof ButtonFormData }> {
    return [
      {
        label: 'Disabled',
        value: 'disabled',
      },
    ];
  }

  getInputFields(): Array<{
    type: string;
    label: string;
    value: keyof ButtonFormData;
  }> {
    return [];
  }
}
