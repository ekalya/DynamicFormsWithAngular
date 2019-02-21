import { Component, OnInit } from '@angular/core';
import { CustomerUIService } from './customer/customer-ui.service';
import {MessageService, MenuItem } from 'primeng/api';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { FormGroup } from '@angular/forms';
import { TasksUIService } from './tasks-ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:  [CustomerUIService, MessageService, TasksUIService ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Tasks';
  listItems: Task[] = [];
  cols:any[] = [{ field: 'name', header: 'Name' }, { field: 'description', header: 'Description' }];
  controls: any[];

constructor(
  private messageService: MessageService,
  private tasksService: TasksService,
  private tasksUIService: TasksUIService) {
  this.controls = this.tasksUIService.getUIControls();
}

ngOnInit(): void {
  this.tasksService.getAll().subscribe(data => {
    this.listItems = data;
  });

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
 itemAddedEvent(form: FormGroup){
   console.log("app component:" + JSON.stringify(form.value));
   const t = new Task();
   t.name = form.value.name;
   t.description = form.value.description;
   this.tasksService.create(t).subscribe(data => {
    this.listItems.push(data);
    this.messageService.add({severity:'info', summary:'Success', detail: JSON.stringify(data)});
   });

 }
 
}
