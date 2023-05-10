import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiInputPhoneModule,
  TuiIslandComponent,
  TuiIslandModule,
  TuiRadioBlockModule,
} from '@taiga-ui/kit';
import { RouterLink } from '@angular/router';
import { TuiButtonModule, TuiGroupModule, TuiLabelModule } from '@taiga-ui/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TuiIslandModule,
    RouterLink,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiGroupModule,
    TuiRadioBlockModule,
    TuiLabelModule,
    TuiInputDateModule,
    TuiInputPhoneModule
  ],
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent {}
