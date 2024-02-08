import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailFormService {
  private email = 'yuppie@yuppie.com.pl';
  private encodedEmail = encodeURIComponent(this.email);
  private url = `https://formsubmit.co/${this.email}`;

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
