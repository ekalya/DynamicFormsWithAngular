import { Component, OnInit } from '@angular/core';
import { CustomerUIService } from './customer/customer-ui.service';
import {MessageService, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:  [CustomerUIService, MessageService ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  items: MenuItem[];
  ngOnInit(): void {
    this.items = [
      {label: 'Update', icon: 'fa fa-fw fa-refresh', command: () => {
          this.update();
      }},
      {label: 'Delete', icon: 'fa fa-fw fa-close', command: () => {
          this.delete();
      }}
  ];
  }
  title = 'angularForms';
  controls: any[];
 
  constructor(service: CustomerUIService, private messageService: MessageService) {
    this.controls = service.getUIControls();
  }
  save() {
    this.messageService.add({severity:'info', summary:'Success', detail:'Data Saved'});
}

update() {
    this.messageService.add({severity:'info', summary:'Success', detail:'Data Updated'});
}

delete() {
    this.messageService.add({severity:'info', summary:'Success', detail:'Data Deleted'});
}
}
