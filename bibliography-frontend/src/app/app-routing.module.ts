import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublisherListComponent } from './modules/publisher-module/module-src/components/publisher-list/publisher-list.component';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { LibraryManagerPageRoutingModule } from './pages/library-manager-page/library-manager-page-routing.module';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';

const routes: Routes = [
  { path: 'sign-in', pathMatch: 'full', component: AuthorizationPageComponent },
  { path: 'sign-up', pathMatch: 'full', component: RegistrationPageComponent },
  { path: 'manager', pathMatch: 'full', loadChildren: () => import('./pages/library-manager-page/library-manager-page.module').then(m => m.LibraryManagerPageModule) },

  { path: 'dashboard', loadChildren: () => import('./pages/library-user-page/library-user-page.module').then(m => m.LibraryUserPageModule) },
  { path: '', pathMatch: 'full', redirectTo: '/sign-in' },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
