import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainCarouselComponent } from '../../shared/main-carousel/main-carousel.component';
import { MapsComponentComponent } from '../../shared/maps-component/maps-component.component';
import { ProductCarouselComponent } from '../../shared/product-carousel/product-carousel.component';
import { TextSectionComponent } from '../../shared/text-section/text-section.component';

@Component({
  selector: 'yup-main-page',
  standalone: true,
  imports: [
    MainCarouselComponent,
    MapsComponentComponent,
    ProductCarouselComponent,
    TextSectionComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  public carouselItems = [
    {
      title: 'One',
      color: 'lightgray',
      image: './assets/top-home/web/1.PNG',
      mobileImage: './assets/top-home/mobile/1.PNG',
    },
    {
      title: 'Two',
      color: 'lightgray',
      image: './assets/top-home/web/2.PNG',
      mobileImage: './assets/top-home/mobile/2.PNG',
    },
    {
      title: 'Two',
      color: 'lightgray',
      image: './assets/top-home/web/3.jpg',
      mobileImage: './assets/top-home/mobile/3.JPG',
    },
  ];
  public carouselNavigationItems = [
    {
      routeUrl: '/product',
      routeParameter: '700'
    },
    {
      routeUrl: '/product',
      routeParameter: '1000v2'
    },
    {
      routeUrl: '/product',
      routeParameter: '1000v1'
    }
  ]
  public carouselProductItems = [
    {
      title: 'Yuppie 700',
      category: '700',
      titleLogo: './assets/img/yup700_logo.png',
      image: './assets/img/1000-v1/ybiv1-1.png',
      sideImageOne: './assets/img/1000-v1/yccv1-2.png',
      sideImageTwo: './assets/img/1000-v1/ycv1-4.png',
    },
    {
      title: 'Yuppie 1000 V1',
      category: '1000v1',
      titleLogo: './assets/img/yup1000v1_logo.png',
      image: './assets/img/1000-v1/ybiv1-1.png',
      sideImageOne: './assets/img/1000-v1/yccv1-2.png',
      sideImageTwo: './assets/img/1000-v1/ycv1-4.png',
    },
    {
      title: 'Yuppie 1000 V2',
      category: '1000v2',
      titleLogo: './assets/img/yup1000v2_logo.png',
      image: './assets/categoryImg/1000v2/v2bi.png',
      sideImageOne: './assets/categoryImg/1000v2/v2br.png',
      sideImageTwo: './assets/categoryImg/1000v2/v2c.png',
    },
  ];
}
