import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'yup-all-product-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-product-carousel.component.html',
  styleUrl: './all-product-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllProductCarouselComponent {
  @Input() items: any[] = [];
  @ViewChild('progress') progress!: ElementRef<any>;
  public currentIndex = 0;
  public showProgressBar = true;

  constructor(
      private cdr: ChangeDetectorRef
    ) {}

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

}
