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
            itemName: '700-b',
            image: './assets/categoryImg/700/700b.PNG',
          },
          {
            title: 'Blueberry Ice',
            itemName: '700-bi',
            image: './assets/categoryImg/700/700bi.PNG',
          },
          {
            title: 'Cotton Candy',
            itemName: '700-cc',
            image: './assets/categoryImg/700/700cc.PNG',
          },
          {
            title: 'Cola Ice',
            itemName: '700-ci',
            image: './assets/categoryImg/700/700ci.PNG',
          },
          {
            title: 'Double Apple',
            itemName: '700-da',
            image: './assets/categoryImg/700/700da.PNG',
          },
          {
            title: 'Energy Drink',
            itemName: '700-ed',
            image: './assets/categoryImg/700/700ed.PNG',
          },
          {
            title: 'Lychee Ice',
            itemName: '700-li',
            image: './assets/categoryImg/700/700li.PNG',
          },
          {
            title: 'Mint',
            itemName: '700-m',
            image: './assets/categoryImg/700/700m.PNG',
          },
          {
            title: 'Mango Ice',
            itemName: '700-mi',
            image: './assets/categoryImg/700/700mi.PNG',
          },
          {
            title: 'Mixed Orange',
            itemName: '700-mo',
            image: './assets/categoryImg/700/700mo.PNG',
          },
          {
            title: 'Peach Mango',
            itemName: '700-pm',
            image: './assets/categoryImg/700/700pm.PNG',
          },
          {
            title: 'Strawberry Ice',
            itemName: '700-si',
            image: './assets/categoryImg/700/700si.PNG',
          },
          {
            title: 'Strawberry Ice Cream',
            itemName: '700-sic',
            image: './assets/categoryImg/700/700sic.PNG',
          },
          {
            title: 'Strawberry Kiwi',
            itemName: '700-sk',
            image: './assets/categoryImg/700/700sk.PNG',
          },
          {
            title: 'Watermelon Ice',
            itemName: '700-wi',
            image: './assets/categoryImg/700/700wi.PNG',
          },
        ];
      case '1000v1':
        return [
          {
            title: 'Blueberry Ice',
            itemName: '1000v1-bi',
            image: './assets/categoryImg/1000v1/ybiv1.png',
          },
          {
            title: 'Blue Razz',
            itemName: '1000v1-br',
            image: './assets/categoryImg/1000v1/ybrv1.png',
          },
          {
            title: 'Cotton Candy',
            itemName: '1000v1-cc',
            image: './assets/categoryImg/1000v1/yccv1.png',
          },
          {
            title: 'Cappuccino',
            itemName: '1000v1-c',
            image: './assets/categoryImg/1000v1/ycv1.png',
          },
          {
            title: 'Double Apple',
            itemName: '1000v1-da',
            image: './assets/categoryImg/1000v1/ydav1.png',
          },
          {
            title: 'Guava Granadilla',
            itemName: '1000v1-gg',
            image: './assets/categoryImg/1000v1/yggv1.png',
          },
          {
            title: 'Grape Ice',
            itemName: '1000v1-gi',
            image: './assets/categoryImg/1000v1/ygiv1.png',
          },
          {
            title: 'Mixed Berries',
            itemName: '1000v1-mb',
            image: './assets/categoryImg/1000v1/ymbv1.png',
          },
          {
            title: 'Strawberry Kiwi',
            itemName: '1000v1-sk',
            image: './assets/categoryImg/1000v1/yskv1.png',
          },
          {
            title: 'Watermelon Ice',
            itemName: '1000v1-wi',
            image: './assets/categoryImg/1000v1/ywiv1.png',
          },
        ];
      case '1000v2':
        return [
          {
            title: 'Blueberry Ice',
            itemName: '1000v2-bi',
            image: './assets/categoryImg/1000v2/v2bi.png',
          },
          {
            title: 'Blue Razz',
            itemName: '1000v2-br',
            image: './assets/categoryImg/1000v2/v2br.png',
          },
          {
            title: 'Cappuccino',
            itemName: '1000v2-c',
            image: './assets/categoryImg/1000v2/v2c.png',
          },
          {
            title: 'Cotton Candy',
            itemName: '1000v2-cc',
            image: './assets/categoryImg/1000v2/v2cc.png',
          },
          {
            title: 'Double Apple',
            itemName: '1000v2-da',
            image: './assets/categoryImg/1000v2/v2da.png',
          },
          {
            title: 'Grape Ice',
            itemName: '1000v2-gi',
            image: './assets/categoryImg/1000v2/v2gi.png',
          },
          {
            title: 'Mint',
            itemName: '1000v2-m',
            image: './assets/categoryImg/1000v2/v2m.png',
          },
          {
            title: 'Mixed Berries',
            itemName: '1000v2-mb',
            image: './assets/categoryImg/1000v2/v2mb.png',
          },
          {
            title: 'Strawberry Ice Cream',
            itemName: '1000v2-ic',
            image: './assets/categoryImg/1000v2/v2sic.png',
          },
          {
            title: 'Watermelon Ice',
            itemName: '1000v2-wi',
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
