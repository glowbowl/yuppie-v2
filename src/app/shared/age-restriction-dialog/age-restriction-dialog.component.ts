import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'yup-age-restriction-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './age-restriction-dialog.component.html',
  styleUrl: './age-restriction-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgeRestrictionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AgeRestrictionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    dialogRef.disableClose = true;
  }

  onNoClick(): void {
    window.location.href = 'https://sip.lex.pl/akty-prawne/dzu-dziennik-ustaw/ochrona-zdrowia-przed-nastepstwami-uzywania-tytoniu-i-wyrobow-16797364/art-6';
  }

  onYesClick(): void {
    sessionStorage.setItem("ageRestriction", "false");
    this.dialogRef.close();
  }
}
