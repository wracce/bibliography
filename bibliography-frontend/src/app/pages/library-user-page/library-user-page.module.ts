import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryUserPageRoutingModule } from './library-user-page-routing.module';
import { LibraryUserPageComponent } from './library-user-page.component';


@NgModule({
  declarations: [
    LibraryUserPageComponent
  ],
  imports: [
    CommonModule,
    LibraryUserPageRoutingModule
  ]
})
export class LibraryUserPageModule { }
