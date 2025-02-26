import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MainCarouselComponent } from '../../shared/main-carousel/main-carousel.component';
import { MapsComponentComponent } from '../../shared/maps-component/maps-component.component';
import { ProductCarouselComponent } from '../../shared/product-carousel/product-carousel.component';
import { TextSectionComponent } from '../../shared/text-section/text-section.component';
import { CommonModule } from '@angular/common';
// @ts-ignore
import JOS from "jos-animation";
import { ProductsService } from '../../shared/services/products.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'yup-main-page',
  standalone: true,
  imports: [
    MainCarouselComponent,
    MapsComponentComponent,
    ProductCarouselComponent,
    TextSectionComponent,
    CommonModule,
    TranslateModule,
    RouterLink,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit, OnDestroy {
  public subCarouselItems: any = [
    {
      title: 'Yuppie 700',
      routeUrl: '/product',
      routeParameter: '700',
    },
    {
      title: 'Yuppie 1000 V1',
      routeUrl: '/product',
      routeParameter: '1000v1',
    },
    {
      title: 'Yuppie 1000 V2',
      routeUrl: '/product',
      routeParameter: '1000v2',
    },
  ];

  observerParallax1: any;
  observerParallax2: any;
  slideProduct = 'all';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.observerParallax1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          const movementBG1 = -((this.parallax1!.offsetTop - scrollOffset) * 0.4);
          const movement1 = -((this.parallax1!.offsetTop - scrollOffset) * 0.1);
          const scale = (0.85 + (scrollOffset * 0.00015));

          let rotate1: number;

          if (this.imageDesktop) {
            rotate1 = -25;
          } else {
            rotate1 = -15;
          }

          Array.from(this.imgs1).forEach((item: any) => {
            item!.style.setProperty('transform', `translate3d(0, ${movement1}px, 0) rotate(${rotate1}deg) scale(${scale})`);
            rotate1 = rotate1 + 15;
          });
          this.bgParallax1!.style.transform = 'translate3d(0, ' + movementBG1 + 'px, 0)';

        }
      });
    }, {
      rootMargin: '100px 0px 100px 0px'
    });

    this.observerParallax2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          const movementBG2 = -((this.parallax2!.offsetTop - scrollOffset) * 0.4);
          const movement2 = -((this.parallax2!.offsetTop - scrollOffset) * 0.2);
          const scale = (0.85 + (scrollOffset * 0.00015));

          let rotate1 = -25;
          Array.from(this.imgs2).forEach((item: any) => {
            item!.style.setProperty('transform', `translate3d(0, ${movement2}px, 0) rotate(${rotate1}deg) scale(${scale})`);
            rotate1 = rotate1 + 15;
          });

          this.bgParallax2!.style.transform = 'translate3d(0, ' + movementBG2 + 'px, 0)';

        }
      });
    }, {
      rootMargin: '100px 0px 100px 0px'
    });

    this.observerParallax1.observe(document.getElementById('parallaxContainer1')!);
    this.observerParallax2.observe(document.getElementById('parallaxContainer2')!);
  }

  parallax1: any;
  bgParallax1: any;
  imgs1: any;
  imgs2: any;
  parallax2: any;
  bgParallax2: any;
  horizontalScrollEl: any;
  imageDesktop = true;
  defaultSlideLineRoute = true;

  constructor(
    private productService: ProductsService,
  ) {}

  ngOnDestroy(): void {
    if (this.observerParallax1) {
      this.observerParallax1.disconnect();
    }
    if (this.observerParallax2) {
      this.observerParallax2.disconnect();
    }
    if (this.horizontalScrollEl) {
      this.horizontalScrollEl.removeEventListener('wheel', this.handleWheelEvent);
    }
  }

  ngOnInit(): void {
    JOS.init();
    this.parallax1 = document.getElementById("parallaxContainer1");
    this.bgParallax1 = document.getElementById("bgParallax1");

    this.imgs1 = document.getElementsByClassName('image-product1');
    this.imgs2 = document.getElementsByClassName('image-product2');

    this.parallax2 = document.getElementById("parallaxContainer2");
    this.bgParallax2 = document.getElementById("bgParallax2");

    const device = navigator.userAgent;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(device)) {
      this.imageDesktop = false;
    } else {
      this.imageDesktop = true;
    }

    if (this.imageDesktop) {
      this.horizontalScrollEl = document.getElementById("horizontal-scroll");
      if (this.horizontalScrollEl) {
        this.horizontalScrollEl.addEventListener('wheel', this.handleWheelEvent);
      }
    }
  }

  private handleWheelEvent = (event: any) => {
    event.preventDefault();
    if (this.horizontalScrollEl) {
      this.horizontalScrollEl.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
      });
    }
  };

  public setCurrentSlideProd(slideProduct: any): void {
    if (!slideProduct.index) {
      this.defaultSlideLineRoute = true;
      this.subCarouselItems = [
        {
          title: 'Yuppie 700',
          routeUrl: '/product',
          routeParameter: '700',
        },
        {
          title: 'Yuppie 1000 V1',
          routeUrl: '/product',
          routeParameter: '1000v1',
        },
        {
          title: 'Yuppie 1000 V2',
          routeUrl: '/product',
          routeParameter: '1000v2',
        },
      ];
    } else {
      this.defaultSlideLineRoute = false;

      this.subCarouselItems = this.productService.getProductsByCategory(slideProduct.productCategory);
      this.subCarouselItems.forEach((item: any) => {
        item['routeUrl'] = '/item';
        item['productCategory'] = slideProduct.productCategory;
        return item;
      });
    }
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
      image: './assets/top-home/web/2.png',
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
