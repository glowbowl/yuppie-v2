import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { MainCarouselComponent } from '../../shared/main-carousel/main-carousel.component';
import { MapsComponentComponent } from '../../shared/maps-component/maps-component.component';
import { ProductCarouselComponent } from '../../shared/product-carousel/product-carousel.component';
import { TextSectionComponent } from '../../shared/text-section/text-section.component';
import { CommonModule } from '@angular/common';
// @ts-ignore
import JOS from "jos-animation";

@Component({
  selector: 'yup-main-page',
  standalone: true,
  imports: [
    MainCarouselComponent,
    MapsComponentComponent,
    ProductCarouselComponent,
    TextSectionComponent,
    CommonModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {

  images = [
    {
      url: './assets/img/yup1000v2_logo.png',
    },
    {
      url: './assets/img/yup1000v1_logo.png',
    },
    {
      url: './assets/img/yup700_logo.png',
    },
    {
      url: './assets/img/yup1000v2_logo.png',
    },
    {
      url: './assets/img/yup1000v1_logo.png',
    },
    {
      url: './assets/img/yup700_logo.png',
    },
    {
      url: './assets/img/yup1000v2_logo.png',
    },
    {
      url: './assets/img/yup1000v1_logo.png',
    },
    {
      url: './assets/img/yup700_logo.png',
    },
    {
      url: './assets/img/yup1000v2_logo.png',
    },
    {
      url: './assets/img/yup1000v1_logo.png',
    },
    {
      url: './assets/img/yup700_logo.png',
    },
  ];

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // Adjust scroll speed as needed
    const scrollSpeed = 1;
    const scrollContainer = document.querySelector('.scroll-container') as HTMLElement;
    scrollContainer.style.transform = `translateX(${scrollOffset * scrollSpeed}px)`;
  }

  constructor() {
  }

  ngOnInit(): void {
    JOS.init();
    const parallax1 = document.getElementById("parallaxContainer1");
    // const img1 = document.getElementById("img1");
    const bgParallax1 = document.getElementById("bgParallax1");
    const parallax2 = document.getElementById("parallaxContainer2");
    // const img1 = document.getElementById("img1");
    const bgParallax2 = document.getElementById("bgParallax2");

    // Parallax Effect for DIV 1
    window.addEventListener("scroll", function () {
      let offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      const movementBG1 = -((parallax1!.offsetTop - offset) * 0.4);
      const movement1 = -((parallax1!.offsetTop - offset) * 0.2);

      const movementBG2 = -((parallax2!.offsetTop - offset) * 0.4);
      const movement2 = -((parallax2!.offsetTop - offset) * 0.2);

      // img1!.style.transform = 'translate3d(0, ' + movement1 + 'px, 0)';
      bgParallax1!.style.transform = 'translate3d(0, ' + movementBG1 + 'px, 0)';

      // img2!.style.transform = 'translate3d(0, ' + movement1 + 'px, 0)';
      bgParallax2!.style.transform = 'translate3d(0, ' + movementBG2 + 'px, 0)';

      // parallax!.style.backgroundPositionY = offset * 0.01 + "px";
      // parallaxcx!.style.backgroundPositionY = offset * 0.11 + "px";
      // parallax2!.style.backgroundPositionY = offset * 0.7 + "px";
      // DIV 1 background will move slower than other elements on scroll.
    });
  }

  public carouselItems = [
    {
      title: 'One',
      color: 'lightgray',
      image: './assets/top-home/web/1.png',
      mobileImage: './assets/top-home/mobile/1.png',
    },
    {
      title: 'Two',
      color: 'lightgray',
      image: './assets/top-home/web/2.png',    // Add more image objects as needed
      mobileImage: './assets/top-home/mobile/2.png',
    },
    {
      title: 'Two',
      color: 'lightgray',
      image: './assets/top-home/web/3.png',
      mobileImage: './assets/top-home/mobile/3.png',
    },
    {
      title: 'Two',
      color: 'lightgray',
      image: './assets/top-home/web/4.png',
      mobileImage: './assets/top-home/mobile/4.png',
    },
  ];
  public carouselNavigationItems = [
    {
      routeUrl: '/product',
      routeParameter: '1000v2'
    },
    {
      routeUrl: '/product',
      routeParameter: '1000v2'
    },
    {
      routeUrl: '/product',
      routeParameter: '1000v1'
    },
    {
      routeUrl: '/product',
      routeParameter: '700'
    }
  ]
  public carouselProductItems = [
    {
      title: 'Yuppie 1000 V2',
      category: '1000v2',
      titleLogo: './assets/img/yup1000v2_logo.png',
      image: './assets/categoryImg/1000v2/v2bi.png',
      sideImageOne: './assets/categoryImg/1000v2/v2br.png',
      sideImageTwo: './assets/categoryImg/1000v2/v2cc.png',
    },
    {
      title: 'Yuppie 1000 V1',
      category: '1000v1',
      titleLogo: './assets/img/yup1000v1_logo.png',
      image: './assets/img/1000-v1/ybiv1-1.png',
      sideImageOne: './assets/img/1000-v1/yccv1-2.png',
      sideImageTwo: './assets/img/1000-v1/ycv1-4.png',
    },
    {
      title: 'Yuppie 700',
      category: '700',
      titleLogo: './assets/img/yup700_logo.png',
      image: './assets/categoryImg/700/700b.png',
      sideImageOne: './assets/categoryImg/700/700cc.png',
      sideImageTwo: './assets/categoryImg/700/700ed.png',
    },
  ];
}
