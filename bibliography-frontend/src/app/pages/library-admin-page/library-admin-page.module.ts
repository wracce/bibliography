import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiAvatarModule, TuiInputDateModule, TuiInputModule, TuiInputNumberModule, TuiInputPasswordModule, TuiInputPhoneModule, TuiIslandModule, TuiSelectModule, TuiTabsModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiDataListModule, TuiDialogModule, TuiFormatPhonePipeModule, TuiHostedDropdownModule, TuiPrimitiveTextfieldModule, TuiScrollbarModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import {  HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'src/app/core/core.module';
import { BookLending } from 'src/app/modules/book-lending-module/module-src/models/book-lending';
import { BookLendingModule } from 'src/app/modules/book-lending-module/book-lending.module';
import { LibraryAdminPageComponent } from './library-admin-page.component';
import { LibraryAdminPageRoutingModule } from './library-admin-page-routing.module';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiCurrency, TuiCurrencyPipeModule, TuiMoneyModule } from '@taiga-ui/addon-commerce';


@NgModule({
  declarations: [
    LibraryAdminPageComponent
  ],
  imports: [
    CommonModule,
    LibraryAdminPageRoutingModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiAvatarModule,
    TuiTabsModule,
    HttpClientModule,
    CoreModule,
    TuiFormatPhonePipeModule,
    BookLendingModule,
    TuiSvgModule,
    TuiHostedDropdownModule,
    TuiDialogModule,
    TuiInputPasswordModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiSelectModule,
    TuiInputNumberModule,
    TuiInputPhoneModule,
    TuiInputModule,
    TuiTextAreaModule,
    TuiScrollbarModule,
    ReactiveFormsModule,
    FormsModule,
    TuiTableModule,
    TuiInputDateModule,
    TuiMoneyModule,
    TuiCurrencyPipeModule,
    TuiTextfieldControllerModule

  ],
  exports:[
    LibraryAdminPageComponent
  ]
})
export class LibraryAdminPageModule { }
