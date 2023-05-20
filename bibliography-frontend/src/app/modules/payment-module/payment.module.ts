import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule, TuiPrimitiveTextfieldModule, TuiScrollbarModule, TuiTextfieldComponent, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiBadgeModule, TuiBadgedContentModule, TuiInputModule, TuiInputNumberModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { CoreModule } from 'src/app/core/core.module';
import { TuiInputColorModule } from '@taiga-ui/addon-editor';
import { SearchPipe } from './module-src/pipes/search.pipe';
import { PaymentListComponent } from './module-src/components/payment-list/payment-list.component';
import { PaymentClientService } from './module-src/services/payment-client.service';
import { PaymentService } from './module-src/services/payment.service';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { SearchPipeByFIO } from './module-src/pipes/searchByFIO.pipe';
import { PaymentSearchComponent } from './module-src/components/payment-search/payment-search.component';



@NgModule({
  declarations: [
    PaymentListComponent,
    PaymentSearchComponent,
    SearchPipe,
    SearchPipeByFIO
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
    TuiInputDateModule,
    TuiInputNumberModule,
    TuiScrollbarModule,
    TuiTextfieldControllerModule,
    TuiCurrencyPipeModule,
    TuiPrimitiveTextfieldModule
  ],
  exports: [
    PaymentListComponent,
    PaymentSearchComponent
  ],
  providers: [PaymentClientService,PaymentService]
})
export class PaymentModule { }
