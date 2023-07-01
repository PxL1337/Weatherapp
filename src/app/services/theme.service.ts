import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
  private currentTheme: string = 'light';

  constructor() {}

  getCurrentTheme(): string {
    return this.currentTheme;
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
  }
}
