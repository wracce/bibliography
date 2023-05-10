import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryManagerPageComponent } from './library-manager-page.component';

const routes: Routes = [{ path: '', component: LibraryManagerPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryManagerPageRoutingModule { }
