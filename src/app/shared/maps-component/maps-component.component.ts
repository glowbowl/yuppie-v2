import { CommonModule } from '@angular/common';
import {
  HttpClientJsonpModule,
  HttpClientModule,
} from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ContactLocationBlockComponent } from '../contact-location-block/contact-location-block.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'yup-maps-component',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    TranslateModule,
    ContactLocationBlockComponent,
    RouterLink,
  ],
  templateUrl: './maps-component.component.html',
  styleUrl: './maps-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapsComponentComponent {}
