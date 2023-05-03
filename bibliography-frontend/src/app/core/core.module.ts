import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TuiButtonModule, TuiModeModule, TuiSvgModule, TuiThemeNightModule } from '@taiga-ui/core';
import { ThemeService } from './services/theme.service';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,TuiSvgModule,TuiButtonModule, TuiThemeNightModule,TuiModeModule

  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
