import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressItemComponent } from './address-item/address-item.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { HttpClientModule } from '@angular/common/http';
import { EditAddressComponent } from './edit-address/edit-address.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressListComponent,
    AddressItemComponent,
    AddAddressComponent,
    EditAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
