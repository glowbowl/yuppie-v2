import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainCarouselComponent } from '../../shared/main-carousel/main-carousel.component';
import { CooperationFormsComponent } from '../../shared/cooperation-forms/cooperation-forms.component';

@Component({
  selector: 'yup-cooperation-page',
  standalone: true,
  imports: [CommonModule, MainCarouselComponent, CooperationFormsComponent],
  templateUrl: './cooperation-page.component.html',
  styleUrl: './cooperation-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CooperationPageComponent {
  public carouselItems = [
    {
      title: 'Współpraca Yuppie',
      titleVisible: true,
      color: 'lightgray',
      image: './assets/img/first.jpg',
      mobileImage: './assets/img/first.jpg',
    }
  ];
}
