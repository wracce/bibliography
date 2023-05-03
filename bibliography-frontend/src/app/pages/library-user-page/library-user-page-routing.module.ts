import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryUserPageComponent } from './library-user-page.component';

const routes: Routes = [{ path: '', component: LibraryUserPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryUserPageRoutingModule { }
