import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem, DialogService, MessageService } from 'primeng/api';
import { DynamicFormComponent } from '../dynamic-form.component';
import { Task } from '../task.model';
import { CustomerUIService } from '../customer/customer-ui.service';
import { TasksUIService } from '../tasks-ui.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss'],
  providers: [DialogService, MessageService, TasksUIService]
})
export class DynamicListComponent{
  @Input() public title: string;
  @Input() public listItems: any[];
  @Input() public cols: any[];
  @Output() public listActionMenuClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() public itemAddedEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() public controls: any[];
  selectedObject: any;


  first: number = 0;

  items: MenuItem[] = [
    {label: 'Details', icon: 'pi pi-search', command: () => {
        this.details();
    }},
    {label: 'Update', icon: 'pi pi-pencil', command: () => {
        this.update();
    }},
    {label: 'Delete', icon: 'pi pi-times-circle', command: () => {
        this.delete();
    }}
];

constructor(
  public dialogService: DialogService,
  private messageService: MessageService){}

reset() {
    this.first = 0;
}

add() {
  if(this.controls === undefined){
    this.messageService.add({severity:'error', summary:'Error', detail:'Error'});
    return;
  }
  this.listActionMenuClick.emit('add');
  const ref = this.dialogService.open(DynamicFormComponent, {
    data: {
      controls: this.controls
    },
    header: 'Add an object',
    width: '70%'
});

ref.onClose.subscribe((form: FormGroup) => {
    this.itemAddedEvent.emit(form); 
});

}

details() {
  this.messageService.add({severity:'error', summary:'Error', detail:JSON.stringify(this.selectedObject)});
  this.listActionMenuClick.emit('update');
}
update() {
  this.listActionMenuClick.emit('update');
}

delete() {
  this.listActionMenuClick.emit('delete');
}

}
