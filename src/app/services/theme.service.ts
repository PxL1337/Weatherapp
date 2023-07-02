import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkTheme: boolean;

  constructor() {
    this.darkTheme = localStorage.getItem('theme') === 'dark';
    this.setTheme(this.darkTheme);
  }

  isDarkTheme() {
    return this.darkTheme;
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    this.setTheme(this.darkTheme);
  }

  private setTheme(dark: boolean) {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
