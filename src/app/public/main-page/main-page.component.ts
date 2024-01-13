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
  // , {title: 'Three', color: 'gray', image: './assets/img/third.jpg'}
  public carouselItems = [
    {
      title: 'One',
      color: 'lightgray',
      image: './assets/img/1000_v1.png',
      mobileImage: './assets/img/mobile_v1.png',
    },
    {
      title: 'Two',
      color: 'lightgray',
      image: './assets/img/1000_v2.png',
      mobileImage: './assets/img/mobile_v2.png',
    },
  ];
  public carouselProductItems = [
    {
      title: 'Yuppie 1000 V1',
      image: './assets/img/1000-v1/ybiv1-1.png',
      sideImageOne: './assets/img/1000-v1/yccv1-2.png',
      sideImageTwo: './assets/img/1000-v1/ycv1-4.png',
    },
    {
      title: 'Yuppie 1000 V2',
      image: './assets/img/1000-v2/ybiv2-1.png',
      sideImageOne: './assets/img/1000-v2/ybrv2-2.png',
      sideImageTwo: './assets/img/1000-v2/yccv2-3.png',
    },
  ];
}
