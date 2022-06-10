import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { DameComponent } from './dame/dame.component';
import { IdentityComponent } from './identity/identity.component';
import { NameComponent } from './name/name.component';
import { PriceComponent } from './price/price.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowValComponent } from './components/show-val/show-val.component';
import { UserComponent } from './user/user.component';
import { ListComponent } from './user/list/list.component';
import { UserFormComponent } from './user/form/form.component';
import { ProductClientComponent } from './product-client/product-client.component';
import { AboutClientComponent } from './about-client/about-client.component';
import { ProductDetailClientComponent } from './product-detail-client/product-detail-client.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/auth/login/login.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DameComponent,
    IdentityComponent,
    NameComponent,
    PriceComponent,
    FormComponent,
    ShowValComponent,
    UserComponent,
    ListComponent,
    UserFormComponent,
    ProductClientComponent,
    AboutClientComponent,
    ProductDetailClientComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    HomeClientComponent,
    AdminProductListComponent,
    AdminProductDetailComponent,
    AdminProductFormComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
