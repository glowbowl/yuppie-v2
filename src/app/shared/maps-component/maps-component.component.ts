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
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'yup-maps-component',
  standalone: true,
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  templateUrl: './maps-component.component.html',
  styleUrl: './maps-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapsComponentComponent implements OnInit {
  public apiLoaded: Observable<boolean>;
  public markers: any = [];

  center: google.maps.LatLngLiteral = { lat: 52, lng: 20 };
  zoom = 6;
  display!: google.maps.LatLngLiteral;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyCJlMGFTXptwklHVEbyVefKRZVXvefNk_o',
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
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
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'black',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
    });
  }
}
