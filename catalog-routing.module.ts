import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { QuickViewComponent } from './quick-view/quick-view.component';

const catalogRoutes: Routes = [
  {path:'detail/:id', component: QuickViewComponent},
  {path:':param/:id', component: CatalogComponent},
  {path: 'shopping_cart', component: ShoppingCartComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(catalogRoutes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
