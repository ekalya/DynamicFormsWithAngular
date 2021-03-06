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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessageContentTypeSetter } from './message-content-type-setter.httpinterceptor';

@NgModule({
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PrimeNGModule,
    HttpClientModule,
    DynamicDialogModule,
  ],
  declarations: [
    AppComponent, 
    DynamicFormComponent, 
    DynamicFormInputControlComponent, 
    CustomerComponent, DynamicListComponent],
    entryComponents: [
      DynamicFormComponent
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: MessageContentTypeSetter,
        multi: true
      }
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
