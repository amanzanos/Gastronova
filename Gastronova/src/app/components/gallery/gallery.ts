import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery implements OnInit, OnDestroy {

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
      image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80',
      url: '/producto/tartar-salmon',
    },
    {
      title: 'Solomillo de ternera',
      description: 'Ternera premium a la parrilla con salsa de vino tinto.',
      price: '28€',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80',
      url: '/producto/tarta-chocolate',
    },
  ];

  currentIndex = 0;
  private autoSlideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => this.nextSlide(), 3000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  resetAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  nextSlide() {
    this.currentIndex++;
    if (this.currentIndex > this.platos.length - 1) {
      this.currentIndex = 0;
    }
  }

  prevSlide() {
    this.resetAutoSlide();
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.platos.length - 1;
    }
  }

  goToSlide(index: number) {
    this.resetAutoSlide();
    this.currentIndex = index;
  }

  goToProducto(url: string) {
    window.location.href = url;
  }
}
