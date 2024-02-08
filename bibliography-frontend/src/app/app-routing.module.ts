import { LOCALE_ID, NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PublisherListComponent } from './modules/publisher-module/module-src/components/publisher-list/publisher-list.component'
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component'
import { LibraryManagerPageRoutingModule } from './pages/library-manager-page/library-manager-page-routing.module'
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component'
import { JwtGuard } from './core/security/helpers/jwt.guard'
import { LibraryAdminPageComponent } from './pages/library-admin-page/library-admin-page.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { BooksPageComponent } from './pages/books-page/books-page.component'
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from '@taiga-ui/i18n'
import { of } from 'rxjs'

const routes: Routes = [
	{
		path: 'sign-in',
		pathMatch: 'full',
		component: AuthorizationPageComponent,
		canActivate: [JwtGuard],
	},
	{
		path: 'sign-up',
		pathMatch: 'full',
		component: RegistrationPageComponent,
		canActivate: [JwtGuard],
	},
	{
		path: 'manager',
		loadChildren: () =>
			import('./pages/library-manager-page/library-manager-page.module').then(
				(m) => m.LibraryManagerPageModule
			),
	},
	{
		path: 'dashboard',
		pathMatch: 'full',
		loadChildren: () =>
			import('./pages/library-user-page/library-user-page.module').then(
				(m) => m.LibraryUserPageModule
			),
		canActivate: [JwtGuard],
	},
	{
		path: 'books',
		pathMatch: 'full',
		loadChildren: () =>
			import('./pages/books-page/books-page.module').then((m) => m.BookPageModule),
		canActivate: [JwtGuard],
	},
	{
		path: 'help',
		pathMatch: 'full',
		component: HomePageComponent,
		canActivate: [JwtGuard],
	},
	{
		path: 'administrator',
		pathMatch: 'full',
		loadChildren: () =>
			import('./pages/library-admin-page/library-admin-page.module').then(
				(m) => m.LibraryAdminPageModule
			),
		canActivate: [JwtGuard],
	},

	{ path: '', pathMatch: 'full', redirectTo: '/sign-in' },
	{ path: '**', pathMatch: 'full', redirectTo: '/' },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
