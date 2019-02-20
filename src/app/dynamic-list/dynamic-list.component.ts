import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss']
})
export class DynamicListComponent{
  @Input() public listItems: any[];
  @Input() public cols: any[];
}
