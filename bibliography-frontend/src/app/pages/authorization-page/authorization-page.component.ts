import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  TuiActiveZoneModule,
  TuiAutoFocusModule,
  TuiOverscrollModule,
  TuiValidationError,
} from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiLinkModule,
  TuiModeModule,
  TuiScrollbarModule,
  TuiTextfieldComponent,
} from '@taiga-ui/core';
import {
  TUI_VALIDATION_ERRORS,
  TuiFieldErrorPipeModule,
  TuiInputComponent,
  TuiInputModule,
  TuiInputPasswordComponent,
  TuiInputPasswordDirective,
  TuiInputPasswordModule,
  TuiIslandModule,
} from '@taiga-ui/kit';
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
    TuiActiveZoneModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    CoreModule,
  ],
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Поле должно быть заполнено!',
      },
    },
  ],
})
export class AuthorizationPageComponent implements AfterViewInit {
  @ViewChild('username')
  usernameElement?: TuiInputComponent;

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(public sessionService: SessionService) {}

  ngAfterViewInit(): void {
    if (this.usernameElement) this.toFocus(this.usernameElement);
  }

  toFocus({
    nativeFocusableElement,
  }: TuiInputComponent | TuiInputPasswordComponent): void {
    if (nativeFocusableElement) {
      nativeFocusableElement.focus();
      setTimeout(() => {
        // this will make the execution after the above boolean has changed
        nativeFocusableElement.focus();
      }, 0);
    }
  }

  sinIn() {
    if (this.form.valid) {
      this.sessionService.setUsernameAndPassword(
        this.form.value.username || '',
        this.form.value.password || ''
      );
      this.sessionService.signIn();
    }
  }

  get computedAuthError(): TuiValidationError | null {
    return this.sessionService.errorMsg
      ? new TuiValidationError(this.sessionService.errorMsg)
      : null;
  }
}
