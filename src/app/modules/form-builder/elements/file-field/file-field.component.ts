import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Attribute, BaseFieldComponent } from '../../base/BaseFieldComponent';

interface FileFormData {
  type: string;
  label: string;
  cssClass: string;
  labelClass: string;
  fileTypes: string;
  minFileSize: string;
  maxFileSize: string;
  customAttributes: Array<Attribute>;
  required: boolean;
  readOnly: boolean;
  disabled: boolean;
  unique: boolean;
}

@Component({
  selector: 'app-file-field',
  templateUrl: './file-field.component.html',
  styleUrls: ['./file-field.component.scss'],
})
export class FileFieldComponent extends BaseFieldComponent<FileFormData> {
  constructor(public override fb: FormBuilder, cd: ChangeDetectorRef) {
    super(fb, cd);
  }

  getDefaultFormData(): FileFormData {
    return {
      type: 'file',
      label: 'File Label',
      cssClass: '',
      labelClass: '',
      fileTypes: '.gif, .jpg, .png',
      minFileSize: '',
      maxFileSize: '',
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
      fileTypes: [''],
      minFileSize: [''],
      maxFileSize: [''],
      customAttributes: fb.array([]),
      required: [false],
      readOnly: [false],
      disabled: [false],
      unique: [false],
    });
  }
  getArrayFormKeys(): Array<keyof FileFormData> {
    return [];
  }

  getCheckOptions(): Array<{ label: string; value: keyof FileFormData }> {
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
    value: keyof FileFormData;
  }> {
    return [
      {
        type: 'text',
        label: 'Label Class',
        value: 'labelClass',
      },
      {
        type: 'text',
        label: 'File Types',
        value: 'fileTypes',
      },
      {
        type: 'text',
        label: 'Min File size',
        value: 'minFileSize',
      },
      {
        type: 'text',
        label: 'Max File size',
        value: 'maxFileSize',
      },
    ];
  }
}
