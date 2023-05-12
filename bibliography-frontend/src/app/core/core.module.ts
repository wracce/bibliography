import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import {
  TuiButtonModule,
  TuiLinkModule,
  TuiModeModule,
  TuiSvgModule,
  TuiThemeNightModule,
} from '@taiga-ui/core';
import { ThemeService } from './theme/theme.service';
import { ExampleNativeDateTransformerDirective } from './native-date-transformer/native-date-transformer.directive';
import { AuthClientService } from './security/services/auth-client.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './security/interceptors/jwt.interceptor';

@NgModule({
  declarations: [HeaderComponent, ExampleNativeDateTransformerDirective],
  imports: [
    CommonModule,
    TuiSvgModule,
    TuiButtonModule,
    TuiThemeNightModule,
    TuiModeModule,
    TuiLinkModule,
  ],
  exports: [HeaderComponent, ExampleNativeDateTransformerDirective],
  providers:[{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },]
})
export class CoreModule {}
