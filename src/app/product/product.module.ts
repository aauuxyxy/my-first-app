import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';


@NgModule({
    declarations: [
        ProductComponent,
        ProductListComponent,
        ProductDetailComponent,
    ],
    imports: [
        ProductRoutingModule,
        CommonModule
    ],
    providers: [],
    bootstrap: []
})
export class ProductModule { }
