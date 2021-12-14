import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Currency } from './currency.model';
import { CurrencyLookupService } from '../currency-lookup.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
  currencies: Currency[] = [];
  constructor(private currencyService: CurrencyService) { }
  lookup = new CurrencyLookupService().lookup;
  USDAmount: number = 1;

  getName(code: string): string {
    var currency: string = this.lookup[code];
    return currency;
  }

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe(payload => {
      this.currencies = [];
      for (let k in payload.quotes) {
        var code = k.substring(3);
        this.currencies.push({
          id: code,
          currencyName: this.getName(code),
          value: payload.quotes[k]
        });
      }
    });
  }

}
