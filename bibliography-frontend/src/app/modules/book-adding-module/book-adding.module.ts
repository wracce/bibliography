import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule, TuiScrollbarModule } from '@taiga-ui/core';
import { TuiBadgeModule, TuiBadgedContentModule, TuiInputModule, TuiInputNumberModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { BookAddingListComponent } from './module-src/components/book-adding-list/book-adding-list.component';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { CoreModule } from 'src/app/core/core.module';
import { BookAddingClientService } from './module-src/services/book-adding-client.service';
import { BookAddingService } from './module-src/services/book-adding.service';
import { BookAddingSearchComponent } from './module-src/components/book-adding-search/book-adding-search.component';
import { TuiInputColorModule } from '@taiga-ui/addon-editor';
import { SearchPipe } from './module-src/pipes/search.pipe';



@NgModule({
  declarations: [
    BookAddingListComponent,
    BookAddingSearchComponent,
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
    TuiInputDateModule,
    TuiInputNumberModule,
    TuiScrollbarModule
  ],
  exports: [
    BookAddingListComponent,
    BookAddingSearchComponent
  ],
  providers: [BookAddingClientService,BookAddingService]
})
export class BookAddingModule { }
