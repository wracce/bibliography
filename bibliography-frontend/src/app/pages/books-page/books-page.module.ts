import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiAvatarModule, TuiIslandModule, TuiTabsModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { BooksPageRoutingModule } from './books-page-routing.module';
import { BooksPageComponent } from './books-page.component';
import { BookModule } from 'src/app/modules/book-module/book.module';
import { PublisherModule } from 'src/app/modules/publisher-module/publisher.module';
import { GenreModule } from 'src/app/modules/genre-module/genre.module';
import { AuthorModule } from 'src/app/modules/author-module/author.module';
import { UserFormModule } from 'src/app/modules/userform-module/userform.module';
import { PaymentModule } from 'src/app/modules/payment-module/payment.module';
import { BookLoosingModule } from 'src/app/modules/book-loosing-module/book-loosing.module';
import { BookLendingModule } from 'src/app/modules/book-lending-module/book-lending.module';
import { BookAddingModule } from 'src/app/modules/book-adding-module/book-adding.module';


@NgModule({
  declarations: [
    BooksPageComponent
  ],
  imports: [
    CommonModule,
    BooksPageRoutingModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiAvatarModule,
    TuiTabsModule,
    BookModule,
    PublisherModule,
    GenreModule,
    AuthorModule,
    UserFormModule,
    BookAddingModule,
    BookLendingModule,
    BookLoosingModule,
    PaymentModule
  ],
  exports: [
  ]
})
export class BookPageModule { }
