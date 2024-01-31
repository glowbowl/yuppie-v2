import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProductsByCategory(category: string) {
    switch (category) {
      case '700':
        return [
          {
            title: 'Blackcurrant',
            image: './assets/categoryImg/700/700b.PNG',
          },
          {
            title: 'Blueberry Ice',
            image: './assets/categoryImg/700/700bi.PNG',
          },
          {
            title: 'Cotton Candy',
            image: './assets/categoryImg/700/700cc.PNG',
          },
          {
            title: 'Cola Ice',
            image: './assets/categoryImg/700/700ci.PNG',
          },
          {
            title: 'Double Apple',
            image: './assets/categoryImg/700/700da.PNG',
          },
          {
            title: 'Energy Drink',
            image: './assets/categoryImg/700/700ed.PNG',
          },
          {
            title: 'Lychee Ice',
            image: './assets/categoryImg/700/700li.PNG',
          },
          {
            title: 'Mint',
            image: './assets/categoryImg/700/700m.PNG',
          },
          {
            title: 'Mango Ice',
            image: './assets/categoryImg/700/700mi.PNG',
          },
          {
            title: 'Mixed Orange',
            image: './assets/categoryImg/700/700mo.PNG',
          },
          {
            title: 'Peach Mango',
            image: './assets/categoryImg/700/700pm.PNG',
          },
          {
            title: 'Strawberry Ice',
            image: './assets/categoryImg/700/700si.PNG',
          },
          {
            title: 'Strawberry Ice Cream',
            image: './assets/categoryImg/700/700sic.PNG',
          },
          {
            title: 'Strawberry Kiwi',
            image: './assets/categoryImg/700/700sk.PNG',
          },
          {
            title: 'Watermelon Ice',
            image: './assets/categoryImg/700/700wi.PNG',
          },
        ];
      case '1000v1':
        return [
          {
            title: 'Blueberry Ice',
            image: './assets/categoryImg/1000v1/ybiv1.png',
          },
          {
            title: 'Blue Razz',
            image: './assets/categoryImg/1000v1/ybrv1.png',
          },
          {
            title: 'Cotton Candy',
            image: './assets/categoryImg/1000v1/yccv1.png',
          },
          {
            title: 'Cappuccino',
            image: './assets/categoryImg/1000v1/ycv1.png',
          },
          {
            title: 'Double Apple',
            image: './assets/categoryImg/1000v1/ydav1.png',
          },
          {
            title: 'Guava Granadilla',
            image: './assets/categoryImg/1000v1/yggv1.png',
          },
          {
            title: 'Grape Ice',
            image: './assets/categoryImg/1000v1/ygiv1.png',
          },
          {
            title: 'Mixed Berries',
            image: './assets/categoryImg/1000v1/ymbv1.png',
          },
          {
            title: 'Strawberry Kiwi',
            image: './assets/categoryImg/1000v1/yskv1.png',
          },
          {
            title: 'Watermelon Ice',
            image: './assets/categoryImg/1000v1/ywiv1.png',
          },
        ];
      case '1000v2':
        return [
          {
            title: 'Blueberry Ice',
            itemName: 'blueberry-ice',
            image: './assets/categoryImg/1000v2/v2bi.png',
          },
          {
            title: 'Blue Razz',
            image: './assets/categoryImg/1000v2/v2br.png',
          },
          {
            title: 'Cappuccino',
            image: './assets/categoryImg/1000v2/v2c.png',
          },
          {
            title: 'Cotton Candy',
            image: './assets/categoryImg/1000v2/v2cc.png',
          },
          {
            title: 'Double Apple',
            image: './assets/categoryImg/1000v2/v2da.png',
          },
          {
            title: 'Grape Ice',
            image: './assets/categoryImg/1000v2/v2gi.png',
          },
          {
            title: 'Mint',
            image: './assets/categoryImg/1000v2/v2m.png',
          },
          {
            title: 'Mixed Berries',
            image: './assets/categoryImg/1000v2/v2mb.png',
          },
          {
            title: 'Strawberry Ice Cream',
            image: './assets/categoryImg/1000v2/v2sic.png',
          },
          {
            title: 'Watermelon Ice',
            image: './assets/categoryImg/1000v2/v2wi.png',
          },
        ];
      default:
        return [];
    }
  }

  getProductsImagesByCategory(category: string) {
    switch (category) {
      case '700':
        return [
          './assets/categoryImg/700-gallery/1.PNG',
          './assets/categoryImg/700-gallery/2.PNG',
          './assets/categoryImg/700-gallery/3.PNG',
          './assets/categoryImg/700-gallery/4.PNG',
          './assets/categoryImg/700-gallery/5.PNG',
          './assets/categoryImg/700-gallery/6.PNG',
        ];
      case '1000v1':
        return [
          './assets/categoryImg/1000v1-gallery/1.JPG',
          './assets/categoryImg/1000v1-gallery/2.JPG',
          './assets/categoryImg/1000v1-gallery/3.JPG',
          './assets/categoryImg/1000v1-gallery/4.JPG',
          './assets/categoryImg/1000v1-gallery/5.JPG',
          './assets/categoryImg/1000v1-gallery/6.JPG',
        ];
      case '1000v2':
        return [
          './assets/categoryImg/1000v2-gallery/1.PNG',
          './assets/categoryImg/1000v2-gallery/2.PNG',
          './assets/categoryImg/1000v2-gallery/3.PNG',
          './assets/categoryImg/1000v2-gallery/4.PNG',
          './assets/categoryImg/1000v2-gallery/5.PNG',
          './assets/categoryImg/1000v2-gallery/6.PNG',
        ];
      default:
        return [];
    }
  }

  getProductsTopImage(category: string) {
    switch (category) {
      case '700':
        return [
          {
            title: 'One',
            color: 'lightgray',
            image: './assets/top-700/web/1.PNG',
            mobileImage: './assets/top-700/mobile/1.PNG',
          },
        ];
      case '1000v1':
        return [
          {
            title: 'One',
            color: 'lightgray',
            image: './assets/top-1000v1/web/1.jpg',
            mobileImage: './assets/top-1000v1/mobile/1.JPG',
          },
        ];
      case '1000v2':
        return [
          {
            title: 'One',
            color: 'lightgray',
            image: './assets/top-1000v2/web/1.PNG',
            mobileImage: './assets/top-1000v2/mobile/1.PNG',
          },
        ];
      default:
        return [];
    }
  }
}
