import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem,
} from '@angular/cdk/drag-drop';

import {
  FormBuilderInput,
  BuilderTypes,
} from '../form-elements/form-elements.component';

export interface EmitFormData {
  id: string;
  formData: any;
}

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  BuilderTypes = BuilderTypes;
  inputs: Array<FormBuilderInput> = [
    {
      input: 'Text Field',
      type: BuilderTypes.TEXT,
      id: '',
      formData: null,
    },
    {
      input: 'Number Field',
      type: BuilderTypes.NUMBER,
      id: '',
      formData: null,
    },
    {
      input: 'Email Field',
      type: BuilderTypes.EMAIL,
      id: '',
      formData: null,
    },
    {
      input: 'Phone Field',
      type: BuilderTypes.PHONE,
      id: '',
      formData: null,
    },
    {
      input: 'Password Field',
      type: BuilderTypes.PASSWORD,
      id: '',
      formData: null,
    },
    {
      input: 'Date Field',
      type: BuilderTypes.DATE,
      id: '',
      formData: null,
    },
    {
      input: 'Color Field',
      type: BuilderTypes.COLOR,
      id: '',
      formData: null,
    },
    {
      input: 'Text Area',
      type: BuilderTypes.TEXT_AREA,
      id: '',
      formData: null,
    },
    {
      input: 'Checkboxes',
      type: BuilderTypes.CHECKBOX,
      id: '',
      formData: null,
    },
    {
      input: 'Radio Buttons',
      type: BuilderTypes.RADIO,
      id: '',
      formData: null,
    },
    {
      input: 'Select List',
      type: BuilderTypes.SELECT,
      id: '',
      formData: null,
    },
    {
      input: 'Hidden Field',
      type: BuilderTypes.HIDDEN,
      id: '',
      formData: null,
    },
    {
      input: 'File Upload',
      type: BuilderTypes.FILE,
      id: '',
      formData: null,
    },
    {
      input: 'Button',
      type: BuilderTypes.BUTTON,
      id: '',
      formData: null,
    },
    {
      input: 'Data Text',
      type: BuilderTypes.DATA_TEXT,
      id: '',
      formData: null,
    },
  ];

  formData: Array<FormBuilderInput> = [];

  constructor(public cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  renderJSON() {
    return JSON.stringify(this.formData, null, 2);
  }

  addIdsToFormData() {
    const arrayFormData = [...this.formData].map((form, index) => {
      return {
        ...form,
        id: `form-id-${index + 1}`,
      };
    });
    this.formData = arrayFormData;
  }

  copyObj<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }

  updateData(data: EmitFormData) {
    const formDataObj = [...this.formData].map((formItem) => {
      if (formItem.id === data.id) {
        return {
          ...formItem,
          formData: data.formData,
        };
      }
      return formItem;
    });
    this.formData = this.copyObj(formDataObj);
  }

  deleteItem(formId: string) {
    this.formData = [...this.formData].filter(
      (formItem) => formItem.id !== formId
    );
  }

  saveForm() {
    console.log(this.formData);
  }

  dropInBuilder(event: CdkDragDrop<FormBuilderInput[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.addIdsToFormData();
    }
  }
  noReturnPredicate() {
    return false;
  }
}
