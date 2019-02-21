import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {KeyFilterModule} from 'primeng/keyfilter';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {ListboxModule} from 'primeng/listbox';
import {PickListModule} from 'primeng/picklist';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MenuModule} from 'primeng/menu';
import {ToastModule} from 'primeng/toast';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ButtonModule} from 'primeng/button';
import {ContextMenuModule} from 'primeng/contextmenu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PasswordModule,
    InputTextModule,
    KeyFilterModule,
    CalendarModule,
    MultiSelectModule,
    ListboxModule,
    PickListModule,
    TableModule,
    CardModule,
    PanelModule,
    SplitButtonModule,
    MenuModule,
    ToastModule,
    DynamicDialogModule,
    ButtonModule,
    ContextMenuModule
  ],
  exports: [
    PasswordModule,
    InputTextModule,
    KeyFilterModule,
    CalendarModule,
    MultiSelectModule,
    ListboxModule,
    PickListModule,
    TableModule,
    CardModule,
    PanelModule,
    SplitButtonModule,
    ToastModule,
    MenuModule,
    DynamicDialogModule,
    ButtonModule,
    ContextMenuModule
  ]
})
export class PrimeNGModule { }
