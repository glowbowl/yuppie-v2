import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainCarouselComponent } from '../../shared/main-carousel/main-carousel.component';
import { MapsComponentComponent } from '../../shared/maps-component/maps-component.component';
import { TranslateModule } from '@ngx-translate/core';
import { ContactLocationBlockComponent } from '../../shared/contact-location-block/contact-location-block.component';

@Component({
  selector: 'yup-location-page',
  standalone: true,
  imports: [
    CommonModule,
    MainCarouselComponent,
    MapsComponentComponent,
    TranslateModule,
    ContactLocationBlockComponent,
  ],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationPageComponent {
  public carouselItems = [
    {
      title: 'Lokalizacja Yuppie',
      color: 'lightgray',
      image: './assets/top-location/web/1.PNG',
      mobileImage: './assets/top-location/mobile/1.PNG',
    },
  ];

  public carouselNavigationItems = [
    {
      routeUrl: '/cooperation',
    },
  ];
}
