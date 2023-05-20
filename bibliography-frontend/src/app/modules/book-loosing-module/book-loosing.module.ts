import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule, TuiScrollbarModule } from '@taiga-ui/core';
import { TuiBadgeModule, TuiBadgedContentModule, TuiInputModule, TuiInputNumberModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { BookLoosingListComponent } from './module-src/components/book-loosing-list/book-loosing-list.component';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { CoreModule } from 'src/app/core/core.module';
import { BookLoosingClientService } from './module-src/services/book-loosing-client.service';
import { BookLoosingService } from './module-src/services/book-loosing.service';
import { BookLoosingSearchComponent } from './module-src/components/book-loosing-search/book-loosing-search.component';
import { TuiInputColorModule } from '@taiga-ui/addon-editor';
import { SearchPipe } from './module-src/pipes/search.pipe';



@NgModule({
  declarations: [
    BookLoosingListComponent,
    BookLoosingSearchComponent,
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
    BookLoosingListComponent,
    BookLoosingSearchComponent
  ],
  providers: [BookLoosingClientService,BookLoosingService]
})
export class BookLoosingModule { }
