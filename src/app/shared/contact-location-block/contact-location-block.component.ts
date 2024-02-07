import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'yup-contact-location-block',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact-location-block.component.html',
  styleUrl: './contact-location-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactLocationBlockComponent {

}
