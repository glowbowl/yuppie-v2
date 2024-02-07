import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainCarouselComponent } from '../../shared/main-carousel/main-carousel.component';
import { GalleryGridComponent } from '../../shared/gallery-grid/gallery-grid.component';
import { TranslateModule } from '@ngx-translate/core';
import { ContactBlockComponent } from '../../shared/contact-block/contact-block.component';

@Component({
  selector: 'yup-about-us-page',
  standalone: true,
  imports: [MainCarouselComponent, GalleryGridComponent, TranslateModule, ContactBlockComponent],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutUsPageComponent {
  public arr = [
    './assets/categoryImg/1000v1-gallery/1.JPG',
    './assets/categoryImg/700-gallery/2.PNG',
    './assets/categoryImg/1000v1-gallery/3.JPG',
    './assets/categoryImg/700-gallery/4.PNG',
    './assets/categoryImg/700-gallery/5.PNG',
    './assets/categoryImg/1000v1-gallery/6.JPG',
  ];
  public some:any;
  public carouselItems = [
    {
      title: 'O nas Yuppie',
      color: 'lightgray',
      image: './assets/top-about/web/1.PNG',
      mobileImage: './assets/top-about/mobile/1.PNG',
    }
  ];

  public carouselNavigationItems = [
    {
      routeUrl: '/cooperation'
    },
  ]
}
