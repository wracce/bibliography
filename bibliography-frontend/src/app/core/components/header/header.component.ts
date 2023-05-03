import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  constructor(public themeService:ThemeService) {}
}
