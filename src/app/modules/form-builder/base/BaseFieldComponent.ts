import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormBuilderInput } from '../form-elements/form-elements.component';
import { EmitFormData } from '../builder/form-builder.component';

export interface Attribute {
  key: string;
  value: string;
  image: string;
  selected: boolean;
}

interface BaseFormData {
  type: string;
  label: string;
  cssClass: string;
  customAttributes: Array<Attribute>;
}

@Component({
  template: '',
})
export abstract class BaseFieldComponent<T extends BaseFormData>
  implements OnInit
{
  @Input() formItem: FormBuilderInput;
  @Output() saveFormData = new EventEmitter<EmitFormData>();
  @Output() deleteFormItem = new EventEmitter<string>();
  @ViewChild('formInputRef') formInputRef: ElementRef;

  inputForm: FormGroup;
  showPopup: boolean = false;
  imagesCheck: boolean = false;
  formData: T;
  arrayFormKeys: Array<keyof T> = ['customAttributes'];

  inputFields: Array<{ type: string; label: string; value: keyof T }> = [
    {
      type: 'text',
      label: 'Label',
      value: 'label',
    },
    {
      type: 'text',
      label: 'CSS Class',
      value: 'cssClass',
    },
  ];

  checkInputOptions: Array<{ label: string; value: keyof T }> = [];

  constructor(public fb: FormBuilder, public cd: ChangeDetectorRef) {
    this.inputForm = this.getInputForm(fb);

    this.arrayFormKeys = [...this.arrayFormKeys, ...this.getArrayFormKeys()];

    this.inputFields = [...this.inputFields, ...this.getInputFields()];

    this.checkInputOptions = [
      ...this.checkInputOptions,
      ...this.getCheckOptions(),
    ];
  }

  abstract getInputForm(fb: FormBuilder): FormGroup;

  abstract getDefaultFormData(): T;

  abstract getArrayFormKeys(): Array<keyof T>;

  abstract getCheckOptions(): Array<{ label: string; value: keyof T }>;

  abstract getInputFields(): Array<{
    type: string;
    label: string;
    value: keyof T;
  }>;

  emitData() {
    this.saveFormData.emit({
      id: this.formItem.id,
      formData: this.formData,
    });
  }

  upadedFormData() {
    if (this.formItem.formData) {
      this.formData = this.formItem.formData;
    } else {
      this.formItem.formData = this.getDefaultFormData();
      this.formData = this.getDefaultFormData();
    }
    this.inputForm.patchValue(this.formData);
    this.arrayFormKeys.map((attr) => {
      this.removeCustomArrayForm(attr);
      const array: Array<Attribute> = (this.formData[attr] ||
        []) as Array<Attribute>;
      array.map((data) => {
        this.addCustomArrayForm(data, attr);
      });
    });
  }

  createArrayFormGroup({ key, value, image, selected }: Attribute): FormGroup {
    return new FormGroup({
      key: new FormControl(key),
      value: new FormControl(value),
      image: new FormControl(image),
      selected: new FormControl(selected),
    });
  }

  ngOnInit(): void {
    this.upadedFormData();
    if (
      JSON.stringify(this.formData) !== JSON.stringify(this.formItem.formData)
    ) {
      this.emitData();
    }
  }

  addCustomArrayForm(
    { key = '', value = '', image = '', selected = false }: Attribute,
    attr: keyof T
  ) {
    const keyValues = this.inputForm.get(attr as any) as FormArray;
    keyValues.push(this.createArrayFormGroup({ key, value, image, selected }));
  }

  removeCustomArrayForm(attribute: keyof T) {
    const keyValues = this.inputForm.get(attribute as any) as FormArray;
    while (keyValues.length > 0) {
      keyValues.removeAt(0);
    }
  }

  removeCustomAttribute(index: number, attribute: keyof T) {
    const keyValues = this.inputForm.get(attribute as any) as FormArray;
    keyValues.removeAt(index);
  }

  deleteItem() {
    this.deleteFormItem.emit(this.formItem.id);
  }

  updateSelection(index: number, attribute: keyof T) {
    const keyValues = this.inputForm.get(attribute as any) as FormArray;
    const values: Array<Attribute> = keyValues.value;
    const updatedValues = values.map((value, i) => {
      if (i === index && value.selected === true) {
        return {
          ...value,
          selected: true,
        };
      }
      return {
        ...value,
        selected: false,
      };
    });
    this.removeCustomArrayForm(attribute);

    updatedValues.forEach((value) => {
      this.addCustomArrayForm(value, attribute);
    });
  }

  addItem({
    choiceOption,
    object,
  }: {
    choiceOption: keyof T;
    object: Attribute;
  }) {
    this.addCustomArrayForm(object, choiceOption);
  }

  removeItem({
    choiceOption,
    index,
  }: {
    choiceOption: keyof T;
    index: number;
  }) {
    this.removeCustomAttribute(index, choiceOption);
  }

  updatedSelect({
    choiceOption,
    index,
  }: {
    choiceOption: keyof T;
    index: number;
  }) {
    this.updateSelection(index, choiceOption);
  }

  submit() {
    this.formData = this.inputForm.value;
    this.emitData();
    this.showPopup = false;
  }
}
