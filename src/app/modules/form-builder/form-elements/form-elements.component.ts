import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmitFormData } from '../builder/form-builder.component';
export enum BuilderTypes {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
  COLOR = 'COLOR',
  PASSWORD = 'PASSWORD',
  TEXT_AREA = 'TEXT_AREA',
  CHECKBOX = 'CHECKBOX',
  RADIO = 'RADIO',
  SELECT = 'SELECT',
  HIDDEN = 'HIDDEN',
  FILE = 'FILE',
  BUTTON = 'BUTTON',
  DATA_TEXT = 'DATA_TEXT',
}

export interface FormBuilderInput {
  id: string;
  input: string;
  type: BuilderTypes;
  formData: any;
}

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss'],
})
export class FormElementsComponent {
  @Input() formItem: FormBuilderInput;
  @Output() saveFormData = new EventEmitter<EmitFormData>();
  @Output() deleteFormItem = new EventEmitter<string>();

  BuilderTypes = BuilderTypes;

  emitData(event: EmitFormData) {
    this.saveFormData.emit(event);
  }

  deleteItem(formId: string) {
    this.deleteFormItem.emit(formId);
  }
}
