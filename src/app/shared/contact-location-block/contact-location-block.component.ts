import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'yup-contact-location-block',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './contact-location-block.component.html',
  styleUrl: './contact-location-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactLocationBlockComponent {
  @Input() inverseColor = false;
}
