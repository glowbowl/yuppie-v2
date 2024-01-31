import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'yup-product-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCarouselComponent {
  @Input() items: any[] = [];
  @ViewChild('progress') progress!: ElementRef<any>;
  public currentIndex = 0;
  public showProgressBar = true;

  constructor(
      private cdr: ChangeDetectorRef
    ) {}

  public nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.cdr.markForCheck();
  }

  public prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
}
