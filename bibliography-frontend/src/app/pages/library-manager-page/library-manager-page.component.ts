import { Component } from '@angular/core';

@Component({
  selector: 'app-library-manager-page',
  templateUrl: './library-manager-page.component.html',
  styleUrls: ['./library-manager-page.component.scss']
})
export class LibraryManagerPageComponent {
  open = false
  open1 = false
  activeTabIndex = 0;
}
