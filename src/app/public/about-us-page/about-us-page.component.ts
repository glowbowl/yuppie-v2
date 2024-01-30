import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainCarouselComponent } from '../../shared/main-carousel/main-carousel.component';
import { GalleryGridComponent } from '../../shared/gallery-grid/gallery-grid.component';

@Component({
  selector: 'yup-about-us-page',
  standalone: true,
  imports: [MainCarouselComponent, GalleryGridComponent],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutUsPageComponent {
  public carouselItems = [
    {
      title: 'O nas Yuppie',
      color: 'lightgray',
      image: './assets/top-about/web/1.PNG',
      mobileImage: './assets/top-about/mobile/1.PNG',
    }
  ];
}
