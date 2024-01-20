import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainCarouselComponent } from '../../shared/main-carousel/main-carousel.component';
import { MapsComponentComponent } from '../../shared/maps-component/maps-component.component';

@Component({
  selector: 'yup-location-page',
  standalone: true,
  imports: [CommonModule, MainCarouselComponent, MapsComponentComponent],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationPageComponent {
  public carouselItems = [
    {
      title: 'Lokalizacje Yuppie',
      titleVisible: true,
      color: 'lightgray',
      image: './assets/img/third.jpg',
      mobileImage: './assets/img/third.jpg',
    }
  ];
}
