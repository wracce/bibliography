import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputNumberModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './module-src/components/book-list/book-list.component';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    TuiTableModule,
    TuiButtonModule,
    TuiTextAreaModule,
    FormsModule,
    TuiInputDateModule,
    CoreModule,
    TuiInputNumberModule
  ],
  exports: [
    BookListComponent
  ]
})
export class BookModule { }
