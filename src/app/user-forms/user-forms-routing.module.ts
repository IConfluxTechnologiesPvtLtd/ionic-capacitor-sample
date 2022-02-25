import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormsPage } from './user-forms.page';

const routes: Routes = [
  {
    path: '',
    component: UserFormsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserFormsPageRoutingModule {}
