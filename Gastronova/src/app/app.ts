import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { Header } from '././components/header/header';
import { Footer } from './components/footer/footer';
import { Gallery } from './components/gallery/gallery';
import { Hero } from './components/hero/hero';
import { Menu } from './components/menu/menu';
import { History } from './components/history/history';
import { OurMenus } from './components/our-menus/our-menus';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    Hero,
    OurMenus,
    Header,
    Menu,
    Gallery,
    Footer,
    History,
  ],
  templateUrl: './app.html',
})
export class App {
  readonly title = signal('Gastronova');
}
