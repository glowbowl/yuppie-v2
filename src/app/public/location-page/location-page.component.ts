import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MainCarouselComponent } from '../../shared/main-carousel/main-carousel.component';
import { MapsComponentComponent } from '../../shared/maps-component/maps-component.component';
import { TranslateModule } from '@ngx-translate/core';
import { ContactLocationBlockComponent } from '../../shared/contact-location-block/contact-location-block.component';
import { RouterLink } from '@angular/router';
// @ts-ignore
import JOS from "jos-animation";

@Component({
  selector: 'yup-location-page',
  standalone: true,
  imports: [
    CommonModule,
    MainCarouselComponent,
    MapsComponentComponent,
    TranslateModule,
    ContactLocationBlockComponent,
    RouterLink,
  ],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationPageComponent implements OnInit, AfterViewInit {
  public isPresent = false;

  constructor(
    private cdr: ChangeDetectorRef,
  ) {}

  ngAfterViewInit(): void {
    this.isPresent = true;
    this.cdr.detectChanges();
    JOS.refresh();
  }

  ngOnInit(): void {
    JOS.init();
  }
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
