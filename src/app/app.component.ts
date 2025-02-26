import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatDialog } from '@angular/material/dialog';
import { AgeRestrictionDialogComponent } from './shared/age-restriction-dialog/age-restriction-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import defaultLanguage from "../assets/i18n/pl.json";

@Component({
  selector: 'yup-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @HostBinding('class.pos-fixed') setStyleIfMobileSidebar: boolean = false;
  public isSidebarOpen = false;

  constructor(
    public dialog: MatDialog,
    private translate: TranslateService
    ) {
    this.translate.addLangs(['en', 'pl']);
    this.translate.setTranslation('pl', defaultLanguage);
    this.translate.setDefaultLang('pl');
    this.translate.use('pl');
  }

  ngOnInit(): void {
    const isAgeRestrictionDialogVisible =
      sessionStorage.getItem('ageRestriction');
    if (isAgeRestrictionDialogVisible !== 'false') {
      this.dialog.open(AgeRestrictionDialogComponent, {
        autoFocus: false,
      });
    }
  }

  public setMobileMenuOpen(isOpen: boolean): void {
    this.isSidebarOpen = isOpen;
    this.setStyleIfMobileSidebar = isOpen;
  }
}
