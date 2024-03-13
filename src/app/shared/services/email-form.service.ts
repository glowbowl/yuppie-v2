import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailFormService {
  constructor(private http: HttpClient) {}

  public sendEmail(input: any) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded; charset=UTF-8'
    );
    const options = { headers: headers };
    const body = new HttpParams()
      .set('fullName', input.fullName)
      .set('phone', input.phone)
      .set('company', input.company)
      .set('mail', input.mail);
    return this.http.post('../assets/php/email.php', body, options);
    // return this.http.post('http://127.0.0.1:8000/email.php', body, options);
  }
}
