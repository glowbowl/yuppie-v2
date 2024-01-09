import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'yup-main-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCarouselComponent implements AfterViewInit {
  @Input() items: any[] = [];
  @ViewChild('progress') progress!: ElementRef<any>;
  public currentIndex = 0;
  public showProgressBar = true;

  constructor(
      private cdr: ChangeDetectorRef
    ) {}

  ngAfterViewInit(): void {
    this.startCarousel();
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
