import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainCarouselComponent } from '../../shared/main-carousel/main-carousel.component';
import { AllProductCarouselComponent } from '../../shared/all-product-carousel/all-product-carousel.component';
import { GalleryGridComponent } from '../../shared/gallery-grid/gallery-grid.component';

@Component({
  selector: 'yup-product-page',
  standalone: true,
  imports: [CommonModule, MainCarouselComponent, AllProductCarouselComponent, GalleryGridComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageComponent {
  public carouselItems = [
    {
      title: 'Współpraca Yuppie',
      titleVisible: true,
      color: 'lightgray',
      image: './assets/img/second.jpg',
      mobileImage: './assets/img/second.jpg',
    }
  ];

  public carouselProductItems = [
    {
      title: 'Yuppie 1000 V2 1',
      image: './assets/img/1000-v2/ybiv2-1.png',
      sideImageOne: './assets/img/1000-v1/yccv1-2.png',
      sideImageTwo: './assets/img/1000-v1/ycv1-4.png',
    },
    {
      title: 'Yuppie 1000 V2 2',
      image: './assets/img/1000-v2/ybrv2-2.png',
      sideImageOne: './assets/img/1000-v2/ybrv2-2.png',
      sideImageTwo: './assets/img/1000-v2/yccv2-3.png',
    },
    {
      title: 'Yuppie 1000 V2 3',
      image: './assets/img/1000-v2/yccv2-3.png',
      sideImageOne: './assets/img/1000-v2/ybrv2-2.png',
      sideImageTwo: './assets/img/1000-v2/yccv2-3.png',
    },
    {
      title: 'Yuppie 1000 V2 4',
      titleLogo: './assets/img/yup1000v2_logo.png',
      image: './assets/img/1000-v2/ybiv2-1.png',
      sideImageOne: './assets/img/1000-v2/ybrv2-2.png',
      sideImageTwo: './assets/img/1000-v2/yccv2-3.png',
    },
    {
      title: 'Yuppie 1000 V2 5',
      titleLogo: './assets/img/yup1000v2_logo.png',
      image: './assets/img/1000-v2/ybiv2-1.png',
      sideImageOne: './assets/img/1000-v2/ybrv2-2.png',
      sideImageTwo: './assets/img/1000-v2/yccv2-3.png',
    },
    {
      title: 'Yuppie 1000 V2 6',
      titleLogo: './assets/img/yup1000v2_logo.png',
      image: './assets/img/1000-v2/ybiv2-1.png',
      sideImageOne: './assets/img/1000-v2/ybrv2-2.png',
      sideImageTwo: './assets/img/1000-v2/yccv2-3.png',
    },
    {
      title: 'Yuppie 1000 V2 7',
      titleLogo: './assets/img/yup1000v2_logo.png',
      image: './assets/img/1000-v2/ybiv2-1.png',
      sideImageOne: './assets/img/1000-v2/ybrv2-2.png',
      sideImageTwo: './assets/img/1000-v2/yccv2-3.png',
    },
    {
      title: 'Yuppie 1000 V2 8',
      titleLogo: './assets/img/yup1000v2_logo.png',
      image: './assets/img/1000-v2/ybiv2-1.png',
      sideImageOne: './assets/img/1000-v2/ybrv2-2.png',
      sideImageTwo: './assets/img/1000-v2/yccv2-3.png',
    },
  ];
}
