import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { AllProductCarouselComponent } from '../../shared/all-product-carousel/all-product-carousel.component';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from '../../shared/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'yup-item-page',
  standalone: true,
  imports: [AllProductCarouselComponent, TranslateModule],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemPageComponent implements OnDestroy {
  public currentItem: any;
  public carouselProductItems: any = [];
  public category: string = '';
  public itemName: string = '';

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
      this.currentItem = this.carouselProductItems.find((item: any) => item.itemName === this.itemName);
      this.carouselProductItems = this.carouselProductItems.filter((item: any) => item.itemName !== this.itemName);
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next(null);
    this.ngUnsubscribe$.complete();
  }
}
