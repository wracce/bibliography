import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule, TuiDataListModule, TuiDialogModule, TuiDropdownModule, TuiHostedDropdownModule, TuiRootModule, TuiScrollbarModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiBadgeModule, TuiBadgedContentModule, TuiDataListWrapperModule, TuiInputCountModule, TuiInputModule, TuiInputNumberModule, TuiInputPhoneModule, TuiSelectModule, TuiTagModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './module-src/components/book-list/book-list.component';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { CoreModule } from 'src/app/core/core.module';
import { BookClientService } from './module-src/services/book-client.service';
import { BookService } from './module-src/services/book.service';
import { BookSearchComponent } from './module-src/components/book-search/book-search.component';
import { TuiInputColorModule } from '@taiga-ui/addon-editor';
import { SearchPipe } from './module-src/pipes/search.pipe';
import { TuiDropdownHostModule, TuiLetModule, TuiPortalModule } from '@taiga-ui/cdk';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { TuiElasticStickyModule } from '@taiga-ui/addon-mobile';
import { IntersectionObserverModule } from '@ng-web-apis/intersection-observer';
import { GenreModule } from '../genre-module/genre.module';



@NgModule({
  declarations: [
    BookListComponent,
    BookSearchComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    TuiTableModule,
    TuiButtonModule,
    TuiTextAreaModule,
    TuiInputModule,
    FormsModule,
    TuiInputDateModule,
    CoreModule,
    TuiBadgedContentModule,
    TuiSelectModule,
    TuiInputPhoneModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiLetModule,
    TuiInputCountModule,
    ReactiveFormsModule,
    TuiInputNumberModule,
    TuiCurrencyPipeModule,
    TuiTextfieldControllerModule,
    TuiScrollbarModule,
    TuiElasticStickyModule,
    TuiPortalModule,
    IntersectionObserverModule,
    GenreModule,
    TuiTagModule,
    TuiDropdownHostModule,
    TuiDropdownModule,
    TuiHostedDropdownModule,
    TuiSvgModule,
    TuiDialogModule
  ],
  exports: [
    BookListComponent,
    BookSearchComponent,
  ],
  providers: [BookClientService,BookService]
})
export class BookModule { }
