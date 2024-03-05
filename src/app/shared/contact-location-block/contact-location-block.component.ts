import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
// @ts-ignore
import JOS from "jos-animation";

@Component({
  selector: 'yup-contact-location-block',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact-location-block.component.html',
  styleUrl: './contact-location-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactLocationBlockComponent implements OnInit {
  ngOnInit(): void {
    JOS.init();
  }
}
