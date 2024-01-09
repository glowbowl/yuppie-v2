import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainCarouselComponent } from '../../shared/main-carousel/main-carousel.component';
import { MapsComponentComponent } from '../../shared/maps-component/maps-component.component';

@Component({
  selector: 'yup-main-page',
  standalone: true,
  imports: [MainCarouselComponent, MapsComponentComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
  public carouselItems = [{title: 'One', color: 'yellow', image: './assets/img/first.jpg'}, {title: 'Two', color: 'green', image: './assets/img/second.jpg'}, {title: 'Three', color: 'gray', image: './assets/img/third.jpg'}];
}
