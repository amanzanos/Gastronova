Descripción

Gastronova es una página web para un restaurante gourmet, construida con Angular 16. Incluye secciones modernas como hero con video de fondo, historia del restaurante, menús degustación, galería de platos en carrusel, y un footer elegante. El proyecto está diseñado para ser responsive, con animaciones suaves y una experiencia de usuario atractiva tanto en desktop como en móviles.

IMPORTANTE: HAY UNA DEMO DE VIDEO EN EL PROYECTO LLAMADAA video-demo

Estructura de Componentes

El proyecto está organizado en componentes independientes para facilitar el mantenimiento y la escalabilidad:

Componente	Descripción
<app-header>	Cabecera fija con navegación estilo "Zara", cambia al hacer scroll.
<app-hero>	Sección principal con video de fondo, logo y texto centrado.
<app-history>	Historia del restaurante con contenido descriptivo y animaciones.
<app-our-menus>	Menús destacados con imágenes y PDFs descargables.
<app-menu>	Lista de menús y platos especiales en tarjetas interactivas.
<app-gallery>	Carrusel de platos con scroll automático y manual, imágenes y precios.
<app-footer>	Footer con información de contacto, redes sociales y créditos.
Tecnologías Utilizadas

Angular 16 con módulos y componentes independientes.

SCSS para estilos modernos y responsivos.

Font Awesome para iconografía.

Animaciones CSS para efectos suaves en hover y scroll.

Video HTML5 en el Hero para presentación dinámica.

Cómo Ejecutar el Proyecto

Clona el repositorio:

git clone <URL_DEL_REPOSITORIO>
cd gastronomova


Instala dependencias:

npm install


Ejecuta la aplicación en modo desarrollo:

ng serve


Abre tu navegador en:

http://localhost:4200

Estructura de Carpetas
src/
│
├─ app/
│   ├─ components/
│   │   ├─ header/
│   │   ├─ hero/
│   │   ├─ history/
│   │   ├─ our-menus/
│   │   ├─ menu/
│   │   ├─ gallery/
│   │   └─ footer/
│   └─ app.module.ts
│
├─ assets/
│   ├─ menus/
│   ├─ images/
│   └─ videoInicial.mp4
│
└─ styles.scss

Características Clave

Carrusel de platos automático y manual, responsive y con diseño moderno.

Hero con video de fondo y logo animado.

Menús con PDFs descargables.

Navegación estilizada que cambia al hacer scroll.

Diseño elegante, minimalista y adaptable a dispositivos móviles.
