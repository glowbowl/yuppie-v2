import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'yup-text-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './text-section.component.html',
  styleUrl: './text-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextSectionComponent {

}
