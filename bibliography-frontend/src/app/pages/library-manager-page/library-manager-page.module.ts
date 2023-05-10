import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryManagerPageRoutingModule } from './library-manager-page-routing.module';
import { LibraryManagerPageComponent } from './library-manager-page.component';
import { PublisherModule } from 'src/app/modules/publisher-module/publisher.module';
import {TuiInputModule, TuiTabsModule} from '@taiga-ui/kit';
import { TuiButtonComponent, TuiButtonModule, TuiDialogModule, TuiRootModule, TuiScrollbarModule } from '@taiga-ui/core';
import { AuthorModule } from 'src/app/modules/author-module/author.module';
import { GenreModule } from 'src/app/modules/genre-module/genre.module';
import { UserformModule } from 'src/app/modules/userform-module/userform.module';
import { BookModule } from 'src/app/modules/book-module/book.module';
import { GenreTabComponent } from './layouts/genre-tab/genre-tab.component';



@NgModule({
  declarations: [
    LibraryManagerPageComponent,
    GenreTabComponent
  ],
  imports: [
    CommonModule,
    LibraryManagerPageRoutingModule,
    PublisherModule,
    GenreModule,
    AuthorModule,
    UserformModule,
    BookModule,
    TuiTabsModule,
    TuiScrollbarModule,
    TuiButtonModule,
    TuiRootModule,
    TuiDialogModule,
    TuiInputModule

  ]
})
export class LibraryManagerPageModule { }
