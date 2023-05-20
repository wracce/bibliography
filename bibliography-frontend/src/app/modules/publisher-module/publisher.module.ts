import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule, TuiDataListModule, TuiHostedDropdownModule, TuiScrollbarModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiBadgeModule, TuiBadgedContentModule, TuiInputModule, TuiInputPhoneModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { PublisherListComponent } from './module-src/components/publisher-list/publisher-list.component';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { CoreModule } from 'src/app/core/core.module';
import { PublisherClientService } from './module-src/services/publisher-client.service';
import { PublisherService } from './module-src/services/publisher.service';
import { PublisherSearchComponent } from './module-src/components/publisher-search/publisher-search.component';
import { TuiInputColorModule } from '@taiga-ui/addon-editor';
import { SearchPipe } from './module-src/pipes/search.pipe';



@NgModule({
  declarations: [
    PublisherListComponent,
    PublisherSearchComponent,
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
    TuiInputPhoneModule,
    TuiSvgModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiScrollbarModule
  ],
  exports: [
    PublisherListComponent,
    PublisherSearchComponent
  ],
  providers: [PublisherClientService,PublisherService]
})
export class PublisherModule { }
