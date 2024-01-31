import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'yup-gallery-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-grid.component.html',
  styleUrl: './gallery-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryGridComponent {
  @Input() items: string[] = [];
  public galleryItems = new Array(6);
}
