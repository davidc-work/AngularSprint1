import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<any> {
    return this.http.get("http://api.currencylayer.com/live?access_key=cfc3ecb5c7dd5e59603d6466d1cb1ed0&format=1");
  }
}
