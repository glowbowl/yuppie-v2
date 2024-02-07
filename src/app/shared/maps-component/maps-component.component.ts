import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientJsonpModule,
  HttpClientModule,
} from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'yup-maps-component',
  standalone: true,
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    TranslateModule
  ],
  templateUrl: './maps-component.component.html',
  styleUrl: './maps-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapsComponentComponent implements OnInit {
  // public apiLoaded: Observable<boolean>;
  public markers: any = [];

  center: google.maps.LatLngLiteral = { lat: 49.787030, lng: 22.767703 };
  zoom = 15;
  display!: google.maps.LatLngLiteral;

  constructor(httpClient: HttpClient) {
    // this.apiLoaded = httpClient
    //   .jsonp(
    //     'https://maps.googleapis.com/maps/api/js?key=AIzaSyCJlMGFTXptwklHVEbyVefKRZVXvefNk_o',
    //     'callback'
    //   )
    //   .pipe(
    //     map(() => true),
    //     catchError(() => of(false))
    //   );
  }

  ngOnInit(): void {
    this.addMarker();
  }

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = event.latLng!.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng!.toJSON();
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: 49.786959,
        lng: 22.766505,
      },
      title: 'Yuppie Office',
      options: {
        draggable: false,
        icon: './assets/img/map_logo.png'
     }
    });
  }
}
