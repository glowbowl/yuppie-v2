import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MainCarouselComponent } from '../../shared/main-carousel/main-carousel.component';
import { CooperationFormsComponent } from '../../shared/cooperation-forms/cooperation-forms.component';
import { HttpClientModule } from '@angular/common/http';
// @ts-ignore
import JOS from "jos-animation";

@Component({
  selector: 'yup-cooperation-page',
  standalone: true,
  imports: [CommonModule, MainCarouselComponent, CooperationFormsComponent,HttpClientModule],
  providers: [HttpClientModule],
  templateUrl: './cooperation-page.component.html',
  styleUrl: './cooperation-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CooperationPageComponent implements OnInit {

  ngOnInit(): void {
    JOS.init();
  }
  public carouselItems = [
    {
      title: 'Współpraca Yuppie',
      color: 'lightgray',
      image: './assets/top-collaboration/web/1.PNG',
      mobileImage: './assets/top-collaboration/mobile/1.PNG',
    }
  ];
}
