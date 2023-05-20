import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule, TuiDataListModule, TuiHostedDropdownModule, TuiScrollbarModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiBadgeModule, TuiBadgedContentModule, TuiInputModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { GenreListComponent } from './module-src/components/genre-list/genre-list.component';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { CoreModule } from 'src/app/core/core.module';
import { GenreClientService } from './module-src/services/genre-client.service';
import { GenreService } from './module-src/services/genre.service';
import { GenreSearchComponent } from './module-src/components/genre-search/genre-search.component';
import { TuiInputColorModule } from '@taiga-ui/addon-editor';
import { SearchPipe } from './module-src/pipes/search.pipe';



@NgModule({
  declarations: [
    GenreListComponent,
    GenreSearchComponent,
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
    TuiSvgModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiScrollbarModule
  ],
  exports: [
    GenreListComponent,
    GenreSearchComponent
  ],
  providers: [GenreClientService,GenreService]
})
export class GenreModule { }
