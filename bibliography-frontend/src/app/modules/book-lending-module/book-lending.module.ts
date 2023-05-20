import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule, TuiScrollbarModule } from '@taiga-ui/core';
import { TuiBadgeModule, TuiBadgedContentModule, TuiCheckboxBlockModule, TuiInputModule, TuiInputNumberModule, TuiTagModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { BookLendingListComponent } from './module-src/components/book-lending-list/book-lending-list.component';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { CoreModule } from 'src/app/core/core.module';
import { BookLendingClientService } from './module-src/services/book-lending-client.service';
import { BookLendingService } from './module-src/services/book-lending.service';
import { BookLendingSearchComponent } from './module-src/components/book-lending-search/book-lending-search.component';
import { TuiInputColorModule } from '@taiga-ui/addon-editor';
import { SearchPipe } from './module-src/pipes/search.pipe';
import { SearchPipeByFIO } from './module-src/pipes/searchByFIO.pipe';
import { SearchOnHandsPipe } from './module-src/pipes/search-on-hands.pipe';



@NgModule({
  declarations: [
    BookLendingListComponent,
    BookLendingSearchComponent,
    SearchPipe,
    SearchPipeByFIO,
    SearchOnHandsPipe
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
    TuiInputDateModule,
    TuiInputNumberModule,
    TuiScrollbarModule,
    TuiTagModule,
    TuiCheckboxBlockModule
  ],
  exports: [
    BookLendingListComponent,
    BookLendingSearchComponent
  ],
  providers: [BookLendingClientService,BookLendingService]
})
export class BookLendingModule { }
