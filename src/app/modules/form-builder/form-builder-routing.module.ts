import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderComponent } from './builder/form-builder.component';
import { FormsBaseComponent } from './forms-base/forms-base.component';

const routes: Routes = [
  {
    path: '',
    component: FormsBaseComponent,
    children: [
      {
        path: 'add',
        component: FormBuilderComponent,
      },
      { path: '', redirectTo: 'add', pathMatch: 'full' },
      { path: '**', redirectTo: 'add', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormBuilderRoutingModule {}
