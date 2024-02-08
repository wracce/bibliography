import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  get isDark(): boolean {
    const str = localStorage.getItem('dark');

    return str === 'true' ? true : false;
  }

  private set isDark(value: boolean) {
    localStorage.setItem('dark', value ? 'true' : 'false');
  }

  changeDark() {
    this.isDark = !this.isDark;
    // this.setTheme();
  }

  constructor() {

    if (!localStorage.getItem('dark')) {

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {

        this.isDark = true;
      } else {
        this.isDark = false;
      }
    }
    this.setTheme();
  }

  private setTheme() {
    document
      .querySelector('html')!
      // .setAttribute('data-theme', this.isDark ? DARK_THEME : LIGHT_THEME);
  }
}
