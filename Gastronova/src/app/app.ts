import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { Header } from '././components/header/header';
import { Footer } from './components/footer/footer';
import { Gallery } from './components/gallery/gallery';
import { Hero } from './components/hero/hero';
import { Menu } from './components/menu/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { History } from './components/history/history';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    Hero,
    Menu,
    Gallery,
    Footer,
    FontAwesomeModule,
    History

  ],
  templateUrl: './app.html',
})
export class App {
  readonly title = signal('Gastronova');
}
