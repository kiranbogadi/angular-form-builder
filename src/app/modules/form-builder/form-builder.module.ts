import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { MaterialModule } from 'src/app/app.material';
import { FormBuilderComponent } from './builder/form-builder.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { TextFieldComponent } from './elements/text-field/text-field.component';
import { NumberFieldComponent } from './elements/number-field/number-field.component';
import { EmailFieldComponent } from './elements/email-field/email-field.component';
import { PhoneFieldComponent } from './elements/phone-field/phone-field.component';
import { PasswordFieldComponent } from './elements/password-field/password-field.component';
import { DateFieldComponent } from './elements/date-field/date-field.component';
import { ColorFieldComponent } from './elements/color-field/color-field.component';
import { TextareaFieldComponent } from './elements/textarea-field/textarea-field.component';
import { CheckboxFieldComponent } from './elements/checkbox-field/checkbox-field.component';
import { RadioFieldComponent } from './elements/radio-field/radio-field.component';
import { PopupInputElemComponent } from './base/popup-input-elem/popup-input-elem.component';
import { PopupChoiceElemComponent } from './base/popup-choice-elem/popup-choice-elem.component';
import { PopupCheckElemComponent } from './base/popup-check-elem/popup-check-elem.component';
import { SelectFieldComponent } from './elements/select-field/select-field.component';
import { HiddenFieldComponent } from './elements/hidden-field/hidden-field.component';
import { FileFieldComponent } from './elements/file-field/file-field.component';
import { ButtonFieldComponent } from './elements/button-field/button-field.component';
import { DatatextFieldComponent } from './elements/datatext-field/datatext-field.component';
import { FormsBaseComponent } from './forms-base/forms-base.component';

@NgModule({
  declarations: [
    FormBuilderComponent,
    FormElementsComponent,
    TextFieldComponent,
    NumberFieldComponent,
    EmailFieldComponent,
    PhoneFieldComponent,
    PasswordFieldComponent,
    DateFieldComponent,
    ColorFieldComponent,
    TextareaFieldComponent,
    CheckboxFieldComponent,
    RadioFieldComponent,
    PopupInputElemComponent,
    PopupChoiceElemComponent,
    PopupCheckElemComponent,
    SelectFieldComponent,
    HiddenFieldComponent,
    FileFieldComponent,
    ButtonFieldComponent,
    DatatextFieldComponent,
    FormsBaseComponent,
  ],
  imports: [
    CommonModule,
    FormBuilderRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class FormBuilderModule {}
