import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-popup-choice-elem',
  templateUrl: './popup-choice-elem.component.html',
  styleUrls: ['./popup-choice-elem.component.scss'],
})
export class PopupChoiceElemComponent {
  @Input() label: string;
  @Input() formArray: any;
  @Input() choiceOption: string;
  @Input() radio: boolean = false;
  @Input() images: boolean = false;
  @Input() selectCheck: boolean = false;

  @Output() addItem = new EventEmitter();
  @Output() removeItem = new EventEmitter();
  @Output() updatedSelect = new EventEmitter();

  checkImage: boolean = false;

  addCustomArrayForm() {
    this.addItem.emit({
      choiceOption: this.choiceOption,
      object: {},
    });
  }
  updateSelection(index: number) {
    if (this.radio) {
      this.updatedSelect.emit({
        choiceOption: this.choiceOption,
        index,
      });
    }
  }
  removeCustomAttribute(index: number) {
    this.removeItem.emit({
      choiceOption: this.choiceOption,
      index,
    });
  }
}
