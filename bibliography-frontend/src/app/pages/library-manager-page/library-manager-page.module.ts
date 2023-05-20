import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryManagerPageRoutingModule } from './library-manager-page-routing.module';
import { LibraryManagerPageComponent } from './library-manager-page.component';
import { PublisherModule } from 'src/app/modules/publisher-module/publisher.module';
import {TuiAccordionModule, TuiInputModule, TuiTabsModule, TuiTreeModule} from '@taiga-ui/kit';
import { TuiButtonComponent, TuiButtonModule, TuiDialogModule, TuiRootModule, TuiScrollbarModule } from '@taiga-ui/core';
import { AuthorModule } from 'src/app/modules/author-module/author.module';
import { GenreModule } from 'src/app/modules/genre-module/genre.module';
import { UserFormModule } from 'src/app/modules/userform-module/userform.module';
import { BookModule } from 'src/app/modules/book-module/book.module';
import { GenreTabComponent } from './layouts/genre-tab/genre-tab.component';
import { UserForm } from 'src/app/core/models/user-form';
import { BookAddingModule } from 'src/app/modules/book-adding-module/book-adding.module';
import { UserformTabComponent } from './layouts/userform-tab/userform-tab.component';
import { BookAddingJournalTabComponent } from './layouts/book-adding-journal-tab/book-adding-journal-tab.component';import { BookLendingJournalTabComponent } from './layouts/book-lending-journal-tab/book-lending-journal-tab.component';
import { BookLendingModule } from 'src/app/modules/book-lending-module/book-lending.module';
import { BookLoosingModule } from 'src/app/modules/book-loosing-module/book-loosing.module';
import { BookLoosingJournalTabComponent } from './layouts/book-loosing-journal-tab/book-loosing-journal-tab.component';
import { PaymentJournalTabComponent } from './layouts/payment-journal-tab/payment-journal-tab.component';
import { PaymentModule } from 'src/app/modules/payment-module/payment.module';
import { BookTabComponent } from './layouts/book-tab/book-tab.component';
import { AuthorTabComponent } from './layouts/author-tab/author-tab.component';
import { PublisherTabComponent } from './layouts/publisher-tab/publisher-tab.component';



@NgModule({
  declarations: [
    LibraryManagerPageComponent,
    GenreTabComponent,
    UserformTabComponent,
    BookAddingJournalTabComponent,
    BookLendingJournalTabComponent,
    BookLoosingJournalTabComponent,
    PaymentJournalTabComponent,
    BookTabComponent,
    AuthorTabComponent,
    PublisherTabComponent
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
    TuiInputModule,
    TuiTreeModule,
    TuiAccordionModule,
    BookAddingModule,
    BookLendingModule,
    BookLoosingModule,
    PaymentModule

  ]
})
export class LibraryManagerPageModule { }
