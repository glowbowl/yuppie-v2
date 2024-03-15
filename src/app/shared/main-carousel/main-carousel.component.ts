import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'yup-main-carousel',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCarouselComponent implements OnInit, AfterViewInit {
  @Input() items: any[] = [];
  @Input() showTitle = false;
  @Input() showButton = true;
  @Input() buttonText = '';
  @Input() navigateRoute: any = [
    {
      routeUrl: '/product',
      routeParameter: '1000v1'
    }
  ]
  @Output() currentProductSlide = new EventEmitter<any>();
  @ViewChild('progress') progress!: ElementRef<any>;
  public currentIndex = 0;
  public showProgressBar = true;
  public imageDesktop = true;

  constructor(
      private cdr: ChangeDetectorRef,
      private router: Router,
    ) {}

  ngOnInit(): void {
    const device = navigator.userAgent;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(device)) {
      this.imageDesktop = false;
    } else {
      this.imageDesktop = true;
    }
  }

  ngAfterViewInit(): void {
    if ( this.items.length > 1 ) {
      this.startCarousel();
    } else {
      this.showProgressBar = false;
      this.cdr.detectChanges();
    }
  }

  public navigateTo() {
    if (this.navigateRoute[this.currentIndex]?.routeParameter) {
      this.router.navigate([this.navigateRoute[this.currentIndex]?.routeUrl, this.navigateRoute[this.currentIndex]?.routeParameter]);
    } else {
      this.router.navigate([this.navigateRoute[0]?.routeUrl]);
    }
  }

  public nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.currentProductSlide.emit(this.navigateRoute[this.currentIndex]?.routeParameter);
    this.cdr.markForCheck();
  }

  public prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  private startCarousel() {
    setInterval(() => {
      this.showProgressBar = false;
      this.cdr.detectChanges();
      this.showProgressBar = true;
      this.nextSlide();
    }, 5250);
  }
}
