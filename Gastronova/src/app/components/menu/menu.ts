import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export class Menu {
  menuDegustacion = {
    title: 'Menú Degustación',
    description: 'Una selección de platos que muestran la esencia de nuestra cocina gourmet.',
    price: '65€',
    image: 'assets/menus/degustacion.jpg',
    pdf: 'assets/menus/degustacion.pdf'
  };

  menuNavidad = {
    title: 'Menú Navidad',
    description: 'Celebraciones navideñas con recetas exclusivas y festivas.',
    price: '80€',
    image: 'assets/menus/navidad.jpg',
    pdf: 'assets/menus/navidad.pdf'
  };

  menuCata = {
    title: 'Cata de Vinos',
    description: 'Maridaje de vinos selectos con aperitivos gourmet.',
    price: '50€',
    image: 'assets/menus/cata.jpg',
    pdf: 'assets/menus/cata.pdf'
  };

  // Método para abrir PDF
  openPDF(pdfPath: string) {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.click();
  }
}
