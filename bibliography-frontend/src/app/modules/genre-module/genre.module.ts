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
import { GenreListComponent } from './module-src/components/genre-list/genre-list.component'
import { TuiInputDateModule } from '@taiga-ui/kit'
import { CoreModule } from 'src/app/core/core.module'
import { GenreClientService } from './module-src/services/genre-client.service'
import { GenreService } from './module-src/services/genre.service'
import { GenreSearchComponent } from './module-src/components/genre-search/genre-search.component'
import { TuiInputColorModule } from '@taiga-ui/addon-editor'
import { SearchPipe } from './module-src/pipes/search.pipe'
import { GenreCreateComponent } from './module-src/components/genre-create/genre-create.component'

@NgModule({
	declarations: [GenreListComponent, GenreSearchComponent, SearchPipe, GenreCreateComponent],
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
		TuiSvgModule,
		TuiDataListModule,
		TuiHostedDropdownModule,
		TuiScrollbarModule,
		TuiDialogModule,
		ReactiveFormsModule,
	],
	exports: [GenreListComponent, GenreSearchComponent, GenreCreateComponent],
	providers: [GenreClientService, GenreService],
})
export class GenreModule {}
