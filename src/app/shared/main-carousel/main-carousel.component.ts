import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'yup-main-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCarouselComponent implements OnInit, AfterViewInit {
  @Input() items: any[] = [];
  @Input() showTitle = false;
  @Input() showButton = true;
  @ViewChild('progress') progress!: ElementRef<any>;
  public currentIndex = 0;
  public showProgressBar = true;
  public imageDesktop = true;

  constructor(
      private cdr: ChangeDetectorRef
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

  public nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
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
