import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryManagerPageRoutingModule } from './library-manager-page-routing.module';
import { LibraryManagerPageComponent } from './library-manager-page.component';
import { PublisherModule } from 'src/app/modules/publisher-module/publisher.module';
import {TuiInputModule, TuiTabsModule} from '@taiga-ui/kit';
import { TuiButtonComponent, TuiButtonModule, TuiDialogModule, TuiRootModule, TuiScrollbarModule } from '@taiga-ui/core';
import { AuthorModule } from 'src/app/modules/author-module/author.module';
import { GenreModule } from 'src/app/modules/genre-module/genre.module';
import { UserFormModule } from 'src/app/modules/userform-module/userform.module';
import { BookModule } from 'src/app/modules/book-module/book.module';
import { GenreTabComponent } from './layouts/genre-tab/genre-tab.component';
import { UserForm } from 'src/app/core/models/user-form';
import { UserformTabComponent } from './layouts/userform-tab/userform-tab.component';



@NgModule({
  declarations: [
    LibraryManagerPageComponent,
    GenreTabComponent,
    UserformTabComponent
  ],
  imports: [
    CommonModule,
    LibraryManagerPageRoutingModule,
    PublisherModule,
    GenreModule,
    AuthorModule,
    UserFormModule,
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
