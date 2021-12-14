import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  getWallet(): Observable<any> {
    return this.http.get("https://wallet-api-38828.web.app/wallet.json");
  }
}
