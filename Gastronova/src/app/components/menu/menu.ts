import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss'],
})
export class Menu {
  menuDegustacion = {
    title: 'Menú Degustación',
    description: 'Una selección de platos que muestran la esencia de nuestra cocina gourmet.',
    price: '65€',
    image:
      'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
    pdf: 'assets/CartaGastroNova.pdf',
  };

  menuNavidad = {
    title: 'Menú Navidad',
    description: 'Celebraciones navideñas con recetas exclusivas y festivas.',
    price: '80€',
    image:
      'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
    pdf: 'assets/CartaGastroNova.pdf',
  };

  menuCata = {
    title: 'Cata de Vinos',
    description: 'Maridaje de vinos selectos con aperitivos gourmet.',
    price: '50€',
    image: 'https://i.pinimg.com/474x/fc/ce/22/fcce22019199c8f30424bf6efefc2c90.jpg',
    pdf: 'assets/CartaGastroNova.pdf',
  };

  // Método para abrir PDF
  openPDF(pdfPath: string) {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.click();
  }
}
