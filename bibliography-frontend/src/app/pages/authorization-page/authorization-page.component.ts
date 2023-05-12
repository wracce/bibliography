import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TuiOverscrollModule } from '@taiga-ui/cdk';
import { TuiButtonModule, TuiLinkModule, TuiModeModule, TuiScrollbarModule } from '@taiga-ui/core';
import { TuiInputModule, TuiInputPasswordModule, TuiIslandModule } from '@taiga-ui/kit';
import { CoreModule } from 'src/app/core/core.module';
import { SessionService } from 'src/app/core/security/services/session.service';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TuiScrollbarModule,
    TuiOverscrollModule,
    TuiInputPasswordModule,
    TuiInputModule,
    TuiIslandModule,
    TuiModeModule,
    TuiButtonModule,
    TuiLinkModule,
    RouterLink,
    CoreModule
  ],
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss'],
})
export class AuthorizationPageComponent {
  constructor (public sessionService:SessionService) {}

}
