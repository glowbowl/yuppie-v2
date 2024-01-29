import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'yup-all-product-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-product-carousel.component.html',
  styleUrl: './all-product-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllProductCarouselComponent implements OnInit {
  @Input() items: any[] = [];
  public visibleSlides: number = 4;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const device = navigator.userAgent;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
        device
      )
    ) {
      this.visibleSlides = 2;
    } else {
      this.visibleSlides = 4;
    }
  }

  ngAfterViewInit() {
    const sliderItems = this.el.nativeElement.querySelectorAll('.slider ul li');
    sliderItems.forEach((item: any, index: any) => {
      this.renderer.setStyle(item, 'order', index + 1);
    });
  }

  resetPos() {
    const sliderItems = this.el.nativeElement.querySelectorAll('.slider ul li');
    sliderItems.forEach((item: any) => {
      this.renderer.removeClass(item, 'transition');
      this.renderer.removeClass(item, 'left');
      this.renderer.removeClass(item, 'right');
    });
  }

  prev() {
    this.el.nativeElement
      .querySelectorAll('.slider ul li')
      .forEach((li: any) => {
        this.renderer.addClass(li, 'transition');
        this.renderer.addClass(li, 'right');
      });

    setTimeout(() => {
      const slider = this.el.nativeElement.querySelector('.slider');
      const sliderItems = slider.querySelectorAll('ul li');
      const sliderLength = sliderItems.length;

      sliderItems.forEach((item: any) => {
        const curPos = parseInt(
          window.getComputedStyle(item).getPropertyValue('order')
        );
        if (curPos < sliderLength) {
          this.renderer.setStyle(item, 'order', curPos + 1);
        } else {
          this.renderer.setStyle(item, 'order', 1);
        }
      });

      this.resetPos();
    }, 500);
  }

  next() {
    this.el.nativeElement
      .querySelectorAll('.slider ul li')
      .forEach((li: any) => {
        this.renderer.addClass(li, 'transition');
        this.renderer.addClass(li, 'left');
      });

    setTimeout(() => {
      const slider = this.el.nativeElement.querySelector('.slider');
      const sliderItems = slider.querySelectorAll('ul li');
      const sliderLength = sliderItems.length;

      sliderItems.forEach((item: any) => {
        const curPos = parseInt(
          window.getComputedStyle(item).getPropertyValue('order')
        );
        if (curPos > 1) {
          this.renderer.setStyle(item, 'order', curPos - 1);
        } else {
          this.renderer.setStyle(item, 'order', sliderLength);
        }
      });
      this.resetPos();
    }, 500);
  }
}
