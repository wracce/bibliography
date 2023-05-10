import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { GenreListComponent } from './module-src/components/genre-list/genre-list.component';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { CoreModule } from 'src/app/core/core.module';
import { GenreClientService } from './module-src/services/genre-client.service';
import { GenreService } from './module-src/services/genre.service';
import { GenreSearchComponent } from './module-src/components/genre-search/genre-search.component';
import { TuiInputColorModule } from '@taiga-ui/addon-editor';



@NgModule({
  declarations: [
    GenreListComponent,
    GenreSearchComponent
  ],
  imports: [
    CommonModule,
    TuiTableModule,
    TuiButtonModule,
    TuiTextAreaModule,
    TuiInputModule,
    FormsModule,
    TuiInputDateModule,
    CoreModule
  ],
  exports: [
    GenreListComponent,
    GenreSearchComponent
  ],
  providers: [GenreClientService,GenreService]
})
export class GenreModule { }
