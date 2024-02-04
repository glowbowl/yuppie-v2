import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailFormService {
  private email = 'yuppieukraine@gmail.com';
  private encodedEmail = encodeURIComponent(this.email);
  private url = `https://formsubmit.co/${this.encodedEmail}`;

  constructor(private http: HttpClient) {}

  public sendEmail(input: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    const options = { headers: headers };
    return this.http.post(this.url, input, options);
  }
}
