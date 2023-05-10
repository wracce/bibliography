import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { AuthorListComponent } from './module-src/components/author-list/author-list.component';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    AuthorListComponent
  ],
  imports: [
    CommonModule,
    TuiTableModule,
    TuiButtonModule,
    TuiTextAreaModule,
    FormsModule,
    TuiInputDateModule,
    CoreModule
  ],
  exports: [
    AuthorListComponent
  ]
})
export class AuthorModule { }
