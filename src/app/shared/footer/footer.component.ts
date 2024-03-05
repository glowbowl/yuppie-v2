import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
// @ts-ignore
import JOS from "jos-animation";

@Component({
  selector: 'yup-footer',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    JOS.init();
  }
}
