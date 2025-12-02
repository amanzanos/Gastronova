import { Component } from '@angular/core';


@Component({
selector: 'app-menu',
templateUrl: './menu.html',
styleUrls: ['./menu.scss']
})
export class Menu {
dishes = [
{ name: 'Risotto de Trufa Negra', price: 28 },
{ name: 'Magret de Pato en reducción', price: 32 },
{ name: 'Tiradito de Atún Rojo', price: 24 },
];
}
