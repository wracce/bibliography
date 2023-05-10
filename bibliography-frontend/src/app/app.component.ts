import { Component } from '@angular/core';
import { ThemeService } from './core/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Учет книг';

  constructor(public themeService:ThemeService) {}
}
