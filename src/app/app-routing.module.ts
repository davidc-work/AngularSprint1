import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrenciesComponent } from './currencies/currencies.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {path: 'table', component: CurrenciesComponent},
  {path: 'wallet', component: WalletComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
