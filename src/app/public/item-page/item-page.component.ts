import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AllProductCarouselComponent } from '../../shared/all-product-carousel/all-product-carousel.component';

@Component({
  selector: 'yup-item-page',
  standalone: true,
  imports: [AllProductCarouselComponent],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemPageComponent {
  public carouselProductItems = [
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
  ]
}
