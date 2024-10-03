import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../modules/form-builder/form-builder.module').then(
        (m) => m.FormBuilderModule
      ),
  },
];

export { routes };
