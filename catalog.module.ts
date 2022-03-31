import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { FormsModule } from '@angular/forms';


import { ProductComponent } from './product/product.component';
import { CatalogComponent } from './catalog.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailComponent } from './detail/detail.component';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    ProductComponent,
    CatalogComponent,
    CategoryComponent,
    SubCategoryComponent,
    SidebarComponent,
    DetailComponent,
    QuickViewComponent,
    ShoppingCartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FormsModule
  ]
})
export class CatalogModule { }
