import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MainCarouselComponent } from '../../shared/main-carousel/main-carousel.component';
import { AllProductCarouselComponent } from '../../shared/all-product-carousel/all-product-carousel.component';
import { GalleryGridComponent } from '../../shared/gallery-grid/gallery-grid.component';
import { ProductsService } from '../../shared/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'yup-product-page',
  standalone: true,
  imports: [CommonModule, MainCarouselComponent, AllProductCarouselComponent, GalleryGridComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageComponent implements OnDestroy {
  public carouselProductItems: any = [];
  public productGalery: string[] = [];
  public carouselItems: any = [];
  public category: string = '';
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
      this.carouselProductItems = this.productService.getProductsByCategory(this.category);
      this.productGalery = this.productService.getProductsImagesByCategory(this.category);
      this.carouselItems = this.productService.getProductsTopImage(this.category);
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next(null);
    this.ngUnsubscribe$.complete();
  }
}
