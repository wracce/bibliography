import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { UserformListComponent } from './module-src/components/userform-list/userform-list.component';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { CoreModule } from 'src/app/core/core.module';
import { UserformSearchComponent } from './module-src/components/userform-search/userform-search.component';
import { UserformService } from './module-src/services/userform.service';
import { TuiInputModule } from '@taiga-ui/kit';



@NgModule({
  declarations: [
    UserformListComponent,
    UserformSearchComponent
  ],
  imports: [
    CommonModule,
    TuiTableModule,
    TuiButtonModule,
    TuiTextAreaModule,
    TuiInputModule,
    FormsModule,
    TuiInputDateModule,
    CoreModule
  ],
  exports: [
    UserformListComponent,
    UserformSearchComponent
  ],
  providers: [
    UserformService
  ]
})
export class UserformModule { }
