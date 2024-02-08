import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TuiTableModule } from '@taiga-ui/addon-table'
import {
	TuiButtonModule,
	TuiDataListModule,
	TuiDialogModule,
	TuiHostedDropdownModule,
	TuiScrollbarModule,
	TuiSvgModule,
} from '@taiga-ui/core'
import {
	TuiBadgeModule,
	TuiBadgedContentModule,
	TuiInputModule,
	TuiTextAreaModule,
} from '@taiga-ui/kit'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthorListComponent } from './module-src/components/author-list/author-list.component'
import { TuiInputDateModule } from '@taiga-ui/kit'
import { CoreModule } from 'src/app/core/core.module'
import { AuthorClientService } from './module-src/services/author-client.service'
import { AuthorService } from './module-src/services/author.service'
import { AuthorSearchComponent } from './module-src/components/author-search/author-search.component'
import { TuiInputColorModule } from '@taiga-ui/addon-editor'
import { SearchPipe } from './module-src/pipes/search.pipe'
import { AuthorCreateComponent } from './module-src/components/author-create/author-create.component'
import { TuiPreviewDialogModule } from '@taiga-ui/addon-preview'

@NgModule({
	declarations: [AuthorListComponent, AuthorSearchComponent, SearchPipe, AuthorCreateComponent],
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
		TuiSvgModule,
		TuiDataListModule,
		TuiHostedDropdownModule,
		TuiScrollbarModule,
		TuiDialogModule,
		ReactiveFormsModule,
	],
	exports: [AuthorListComponent, AuthorSearchComponent, AuthorCreateComponent],
	providers: [AuthorClientService, AuthorService],
})
export class AuthorModule {}
