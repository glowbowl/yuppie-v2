import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
// @ts-ignore
import JOS from "jos-animation";
// import AOS from "aos";

@Component({
  selector: 'yup-product-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCarouselComponent implements OnInit {
  @Input() items: any[] = [];
  @ViewChild('progress') progress!: ElementRef<any>;
  public currentIndex = 0;
  public showProgressBar = true;

  constructor(
      private cdr: ChangeDetectorRef
    ) {}

  ngOnInit(): void {
    // AOS.init();
    JOS.init();
  }

  public nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.cdr.markForCheck();
  }

  public prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
}
