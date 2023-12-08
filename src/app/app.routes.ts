import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
  {
    path: 'details',
    title: 'Details',
    component: DetailsComponent,
  },
  {
    path: 'products',
    title: 'Products',
    component: ProductComponent
  }
];
