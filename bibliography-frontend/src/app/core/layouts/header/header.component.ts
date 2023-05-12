import { Component } from '@angular/core';
import { ThemeService } from '../../theme/theme.service';
import { SessionService } from '../../security/services/session.service';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public themeService:ThemeService, public sessionService:SessionService) {}
}
