import { HomeComponent } from './app/home/home.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { OrderComponent } from './app/order/order.component';
import { DetailProductComponent } from './app/detail-product/detail-product.component';

bootstrapApplication(
  // HomeComponent,
  OrderComponent,
  // DetailProductComponent,
   appConfig)
  .catch((err) => console.error(err));
