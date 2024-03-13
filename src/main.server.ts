import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { HomeComponent } from './app/home/home.component';
import { OrderComponent } from './app/order/order.component';
import { DetailProductComponent } from './app/detail-product/detail-product.component';

const bootstrap = () => bootstrapApplication
(
    // HomeComponent,
    OrderComponent,
    // DetailProductComponent,
     config);

export default bootstrap;
