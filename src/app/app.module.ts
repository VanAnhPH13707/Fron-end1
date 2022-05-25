import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChampComponent } from './champ/champ.component';
import { TableComponent } from './table/table.component';
import { DameComponent } from './dame/dame.component';
import { IdentityComponent } from './identity/identity.component';
import { NameComponent } from './name/name.component';
import { PriceComponent } from './price/price.component';
import { FormComponent } from './form/form.component';
import { ShowValComponent } from './components/show-val/show-val.component';
import { UserComponent } from './user/user.component';
import { ListComponent } from './user/list/list.component';
import { UserFormComponent } from './user/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampComponent,
    TableComponent,
    DameComponent,
    IdentityComponent,
    NameComponent,
    PriceComponent,
    FormComponent,
    ShowValComponent,
    UserComponent,
    ListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
