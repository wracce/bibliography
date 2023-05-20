import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryUserPageRoutingModule } from './library-user-page-routing.module';
import { LibraryUserPageComponent } from './library-user-page.component';
import { TuiAvatarModule, TuiIslandModule, TuiTabsModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiFormatPhonePipeModule } from '@taiga-ui/core';
import {  HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'src/app/core/core.module';
import { BookLending } from 'src/app/modules/book-lending-module/module-src/models/book-lending';
import { BookLendingModule } from 'src/app/modules/book-lending-module/book-lending.module';
import { TuiCurrencyPipe, TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';


@NgModule({
  declarations: [
    LibraryUserPageComponent
  ],
  imports: [
    CommonModule,
    LibraryUserPageRoutingModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiAvatarModule,
    TuiTabsModule,
    HttpClientModule,
    CoreModule,
    TuiFormatPhonePipeModule,
    BookLendingModule,
    TuiCurrencyPipeModule,

  ],
})
export class LibraryUserPageModule { }
