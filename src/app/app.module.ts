import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';
 
import { AppComponent }                 from './app.component';
 
import { AppRoutingModule } from './app-routing.module';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormInputControlComponent } from './dynamic-form-input-control.component';
import { CustomerComponent } from './customer/customer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PrimeNGModule} from './prime-ng/prime-ng.module';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';

@NgModule({
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PrimeNGModule
  ],
  declarations: [
    AppComponent, 
    DynamicFormComponent, 
    DynamicFormInputControlComponent, 
    CustomerComponent, DynamicListComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
