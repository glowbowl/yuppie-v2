import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
// @ts-ignore
import JOS from "jos-animation";

@Component({
  selector: 'yup-text-section',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './text-section.component.html',
  styleUrl: './text-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextSectionComponent implements OnInit {

  ngOnInit(): void {
    // AOS.init();
    JOS.init();
  }
}
