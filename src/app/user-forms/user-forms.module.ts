import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserFormsPageRoutingModule } from './user-forms-routing.module';

import { UserFormsPage } from './user-forms.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserFormsPageRoutingModule
  ],
  declarations: [UserFormsPage]
})
export class UserFormsPageModule {}
