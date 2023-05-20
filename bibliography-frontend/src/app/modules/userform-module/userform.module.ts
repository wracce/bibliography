import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule, TuiDataListModule, TuiDialogModule, TuiHostedDropdownModule, TuiRootModule, TuiScrollbarModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiBadgeModule, TuiBadgedContentModule, TuiDataListWrapperModule, TuiInputCountModule, TuiInputModule, TuiInputNumberModule, TuiInputPasswordModule, TuiInputPhoneModule, TuiSelectModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormListComponent } from './module-src/components/userform-list/userform-list.component';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { CoreModule } from 'src/app/core/core.module';
import { UserFormClientService } from './module-src/services/userform-client.service';
import { UserFormService } from './module-src/services/userform.service';
import { UserFormSearchComponent } from './module-src/components/userform-search/userform-search.component';
import { TuiInputColorModule } from '@taiga-ui/addon-editor';
import { SearchPipe } from './module-src/pipes/search.pipe';
import { TuiLetModule, TuiPortalModule } from '@taiga-ui/cdk';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { TuiElasticStickyModule } from '@taiga-ui/addon-mobile';
import { IntersectionObserverModule } from '@ng-web-apis/intersection-observer';


@NgModule({
  declarations: [
    UserFormListComponent,
    UserFormSearchComponent,
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
    TuiSelectModule,
    TuiInputPhoneModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiLetModule,
    TuiInputCountModule,
    ReactiveFormsModule,
    TuiInputNumberModule,
    TuiCurrencyPipeModule,
    TuiTextfieldControllerModule,
    TuiScrollbarModule,
    TuiElasticStickyModule,
    TuiPortalModule,
    IntersectionObserverModule,
    TuiSvgModule,
    TuiHostedDropdownModule,
    TuiDialogModule,
    TuiInputPasswordModule
  ],
  exports: [
    UserFormListComponent,
    UserFormSearchComponent
  ],
  providers: [UserFormClientService,UserFormService]
})
export class UserFormModule { }
