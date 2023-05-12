import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiBadgeModule, TuiBadgedContentModule, TuiInputModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { AuthorListComponent } from './module-src/components/author-list/author-list.component';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { CoreModule } from 'src/app/core/core.module';
import { AuthorClientService } from './module-src/services/author-client.service';
import { AuthorService } from './module-src/services/author.service';
import { AuthorSearchComponent } from './module-src/components/author-search/author-search.component';
import { TuiInputColorModule } from '@taiga-ui/addon-editor';
import { SearchPipe } from './module-src/pipes/search.pipe';



@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorSearchComponent,
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
    TuiInputDateModule
  ],
  exports: [
    AuthorListComponent,
    AuthorSearchComponent
  ],
  providers: [AuthorClientService,AuthorService]
})
export class AuthorModule { }
