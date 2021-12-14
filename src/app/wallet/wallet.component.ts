import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WalletService } from '../wallet.service';
import { Wallet } from '../wallet.model';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  wallets: Wallet[] = [];
  selectedWallet: Wallet;
  selectedWalletIndex: number;
  constructor(private walletService: WalletService) { }

  convertToUSD(code: string, value: number): number {
    return 0;
  }

  updateSelectedWallet(): void { 
    if (!this.wallets.length) return ;
    this.selectedWallet = this.wallets[this.selectedWalletIndex];
  }

  /*updateText(): void {
    var rect = document.getElementById('wallet-img')?.getBoundingClientRect();
    var nameContainer = document.getElementById('name-container');
    nameContainer!.style.left = rect!.left + rect!.width / 2 + 'px';
    nameContainer!.style.top = rect!.top + rect!.height / 2 + 'px';
  }*/

  ngOnInit(): void {
    this.walletService.getWallet().subscribe(payload => {
      console.log(payload);
      payload.forEach((wallet: any) => {
        this.wallets.push(wallet);
      });
      this.selectedWallet = this.wallets[0];
    });

    //window.addEventListener('resize', this.updateText);
  }

}
