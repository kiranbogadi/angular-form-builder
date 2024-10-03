import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Attribute, BaseFieldComponent } from '../../base/BaseFieldComponent';

interface ButtonFormData {
  type: string;
  label: string;
  cssClass: string;
  customAttributes: Array<Attribute>;
}

@Component({
  selector: 'app-datatext-field',
  templateUrl: './datatext-field.component.html',
  styleUrls: ['./datatext-field.component.scss'],
})
export class DatatextFieldComponent extends BaseFieldComponent<ButtonFormData> {
  constructor(public override fb: FormBuilder, cd: ChangeDetectorRef) {
    super(fb, cd);
  }

  getDefaultFormData(): ButtonFormData {
    return {
      type: 'h1',
      label: 'This is a Sample Text',
      cssClass: '',
      customAttributes: [],
    };
  }
  getInputForm(fb: FormBuilder) {
    return fb.group({
      type: [''],
      label: [''],
      cssClass: [''],
      customAttributes: fb.array([]),
    });
  }
  getArrayFormKeys(): Array<keyof ButtonFormData> {
    return [];
  }

  getCheckOptions(): Array<{ label: string; value: keyof ButtonFormData }> {
    return [];
  }

  getInputFields(): Array<{
    type: string;
    label: string;
    value: keyof ButtonFormData;
  }> {
    return [];
  }
}
