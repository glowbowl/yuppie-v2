import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'yup-language-translate',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './language-translate.component.html',
  styleUrl: './language-translate.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageTranslateComponent {
  public selectedLanguage = 'pl';

  constructor(
    public translate: TranslateService,
  ) {
    // const browserLang = translate.getBrowserLang() as string;
    this.selectedLanguage = translate.currentLang;
  }
}
