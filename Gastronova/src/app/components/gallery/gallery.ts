import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {

 platos = [
  {
    title: 'Rissoto de setas',
    description: 'Crema de arroz con setas silvestres y parmesano.',
    price: '18€',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
    url: '/producto/rissoto',
  },
  {
    title: 'Tartar de salmón',
    description: 'Salmón fresco con aguacate, limón y toque cítrico.',
    price: '22€',
    image: 'https://images.unsplash.com/photo-1628687412351-7c0ff1e22b2f?auto=format&fit=crop&w=800&q=80',
    url: '/producto/tartar-salmon',
  },
  {
    title: 'Solomillo de ternera',
    description: 'Ternera premium a la parrilla con salsa de vino tinto.',
    price: '28€',
    image: 'https://images.unsplash.com/photo-1617196039220-5ff6a4e4c8f0?auto=format&fit=crop&w=800&q=80',
    url: '/producto/solomillo',
  },
  {
    title: 'Ensalada gourmet',
    description: 'Mezcla de hojas verdes con frutos secos y vinagreta de mostaza.',
    price: '15€',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80',
    url: '/producto/ensalada',
  },
  {
    title: 'Paella de mariscos',
    description: 'Arroz tradicional con gambas, mejillones y calamares.',
    price: '24€',
    image: 'https://images.unsplash.com/photo-1601050697567-6e4974f1735d?auto=format&fit=crop&w=800&q=80',
    url: '/producto/paella-mariscos',
  },
  {
    title: 'Burger gourmet',
    description: 'Hamburguesa de ternera con queso brie, rúcula y cebolla caramelizada.',
    price: '20€',
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80',
    url: '/producto/burger-gourmet',
  },
  {
    title: 'Sushi deluxe',
    description: 'Selección de nigiris y rolls premium con pescado fresco.',
    price: '26€',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80',
    url: '/producto/sushi-deluxe',
  },
  {
    title: 'Tarta de chocolate',
    description: 'Tarta casera de chocolate negro con toque de frambuesa.',
    price: '8€',
    image: 'https://images.unsplash.com/photo-1600891964890-61c68d0f6f40?auto=format&fit=crop&w=800&q=80',
    url: '/producto/tarta-chocolate',
  },
];

 currentIndex = 0;

  ngOnInit() {
    setInterval(() => this.nextSlide(), 3000); // cambia cada 3s
  }

  nextSlide() {
    this.currentIndex++;
    if (this.currentIndex > this.platos.length - 1) {
      this.currentIndex = 0; // vuelve al inicio
    }
  }
  goToProducto(url: string) {
    window.location.href = url;
  }
}
