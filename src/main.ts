import { HomeComponent } from './app/home/home.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { DetailProductComponent } from './app/detail-product/detail-product.component';
import { OrderConfirmComponent } from './app/order-confirm/order-confirm.component';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';

bootstrapApplication(
  // HomeComponent,
  // OrderComponent,
  // DetailProductComponent, 
  RegisterComponent,
  // LoginComponent,
  // OrderConfirmComponent,
   appConfig)
  .catch((err) => console.error(err));
