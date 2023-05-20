import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryAdminPageComponent } from './library-admin-page.component';

const routes: Routes = [{ path: '', component: LibraryAdminPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryAdminPageRoutingModule { }
