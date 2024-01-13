import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatDialog } from '@angular/material/dialog';
import { AgeRestrictionDialogComponent } from './shared/age-restriction-dialog/age-restriction-dialog.component';

@Component({
  selector: 'yup-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog){}

  ngOnInit(): void {
    const isAgeRestrictionDialogVisible = sessionStorage.getItem("ageRestriction");
    if (isAgeRestrictionDialogVisible !== 'false') {
      this.dialog.open(AgeRestrictionDialogComponent, {
        autoFocus: false,
      });
    }
  }
}
