import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailFormService {
  private url = '';

  constructor(private http: HttpClient) {}

  public sendEmail(input: any) {
    return this.http.post(this.url, input);
  }
}
