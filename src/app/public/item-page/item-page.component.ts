import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AllProductCarouselComponent } from '../../shared/all-product-carousel/all-product-carousel.component';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from '../../shared/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
// @ts-ignore
import JOS from "jos-animation";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'yup-item-page',
  standalone: true,
  imports: [AllProductCarouselComponent, TranslateModule, CommonModule],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemPageComponent implements OnInit, OnDestroy, AfterViewInit {
  public currentItem: any;
  public carouselProductItems: any = [];
  public itemSpecs: any;
  public category: string = '';
  public itemName: string = '';

  public isPresent = false;

  private ngUnsubscribe$ = new Subject();

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {
    this.route.paramMap
    .pipe(takeUntil(this.ngUnsubscribe$))
    .subscribe(params => {
      this.category = params.get('category') || 'all';
      this.itemName = params.get('name') || 'all';
      this.carouselProductItems = this.productService.getProductsByCategory(this.category);
      this.itemSpecs = this.productService.getProductsSpecs(this.category);
      this.currentItem = this.carouselProductItems.find((item: any) => item.itemName === this.itemName);
      this.carouselProductItems = this.carouselProductItems.filter((item: any) => item.itemName !== this.itemName);
      this.cdr.markForCheck();
    });
  }

  ngAfterViewInit(): void {
    this.isPresent = true;
    this.cdr.detectChanges();
    JOS.refresh();
  }

  ngOnInit(): void {
    JOS.init();
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next(null);
    this.ngUnsubscribe$.complete();
  }
}
