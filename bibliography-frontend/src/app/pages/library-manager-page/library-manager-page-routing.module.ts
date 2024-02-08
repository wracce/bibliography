import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LibraryManagerPageComponent } from './library-manager-page.component'
import { AuthorTabComponent } from './layouts/author-tab/author-tab.component'
import { HomePageComponent } from '../home-page/home-page.component'

const routes: Routes = [
	{
		path: '',
		component: LibraryManagerPageComponent,

		// children: [
		// 	{
		// 		path: '',
		// 		redirectTo: 'authors',
		// 	},
		// 	{
		// 		path: 'authors',
		// 		component: HomePageComponent,
		// 	},
		// 	{
		// 		path: '**',
		// 		redirectTo: 'authors',
		// 	},
		// ],
	},
	// {
	// 	path: 'a',
	// 	component: HomePageComponent,
	// 	outlet: 'a',
	// },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LibraryManagerPageRoutingModule {}
