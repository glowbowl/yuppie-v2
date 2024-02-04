import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmailFormService } from '../services/email-form.service';
import { catchError, map, take, tap, throwError } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'yup-cooperation-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [EmailFormService],
  templateUrl: './cooperation-forms.component.html',
  styleUrl: './cooperation-forms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperationFormsComponent implements OnInit {
  public contactForm!: FormGroup;
  public loader = false;

  get formControls() {
    return this.contactForm.controls;
  }

  constructor(
    private emailService: EmailFormService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  public sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.invalid && this.contactForm.markAllAsTouched();
      return;
    }

    this.loader = true;
    this.emailService
      .sendEmail({
        'Imię i nazwisko': this.contactForm.value.name,
        'E-mail': this.contactForm.value.email,
        'Telefon': this.contactForm.value.number,
        'Wiadomość': this.contactForm.value.message,
        _captcha: 'false',
      })
      .pipe(
        take(1),
        map(value => {
          console.info('Succeed');
          return true;
        }),
        catchError((err: any) => {
          console.log(err.statusText);
          this.loader = false;
          this.cdr.detectChanges();

          if (err.statusText === 'OK') {
            this.openSnackBar('Prośba została pomyślnie wysłana', 'OK');
          } else {
            this.openSnackBar('Coś poszło nie tak', 'OK');
          }
          return throwError(err);
        }),
        tap((res: any) => {
          console.log(res.statusText);
          this.loader = false;
          this.cdr.detectChanges();

          if (res.statusText === 'OK') {
            this.openSnackBar('Prośba została pomyślnie wysłana', 'OK');
          } else {
            this.openSnackBar('Coś poszło nie tak', 'OK');
          }
        })
      )
      .subscribe((res: any) => {});

    this.contactForm.reset();
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  private initForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      message: [''],
    });
  }
}
