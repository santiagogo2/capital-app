import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedPrestadoraPage } from './red-prestadora.page';

const routes: Routes = [
  {
    path: '',
    component: RedPrestadoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedPrestadoraPageRoutingModule {}
