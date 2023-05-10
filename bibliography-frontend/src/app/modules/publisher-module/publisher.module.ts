import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublisherListComponent } from './module-src/components/publisher-list/publisher-list.component';
import { PublisherRowComponent } from './module-src/components/publisher-row/publisher-row.component';
import { PublisherModalComponent } from './module-src/components/publisher-modal/publisher-modal.component';
import {TuiTableModule} from '@taiga-ui/addon-table';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PublisherListComponent,
    PublisherRowComponent,
    PublisherModalComponent
  ],
  imports: [
    CommonModule,
    TuiTableModule,
    TuiButtonModule,
    TuiTextAreaModule,
    FormsModule
  ],
  exports: [
    PublisherListComponent
  ]
})
export class PublisherModule { }
