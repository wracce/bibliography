import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify'
import {
	TuiRootModule,
	TuiDialogModule,
	TuiAlertModule,
	TUI_SANITIZER,
	TuiThemeNightModule,
	TuiModeModule,
	TuiScrollbarModule,
} from '@taiga-ui/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LOCALE_ID, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from '@taiga-ui/i18n'
import { of } from 'rxjs'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { TuiOverscrollModule } from '@taiga-ui/cdk'
import { PublisherModule } from './modules/publisher-module/publisher.module'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { JwtInterceptor } from './core/security/helpers/jwt.interceptor'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		TuiRootModule,
		TuiDialogModule,
		TuiAlertModule,
		CoreModule,
		TuiThemeNightModule,
		TuiModeModule,
		TuiScrollbarModule,
		TuiOverscrollModule,
		PublisherModule,
		HttpClientModule,
		RouterModule,
	],
	providers: [
		{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
		{ provide: LOCALE_ID, useValue: 'ru' },
		{
			provide: TUI_LANGUAGE,
			useValue: of(TUI_RUSSIAN_LANGUAGE),
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
