import { Component, Input, OnInit } from '@angular/core';
import { PagerService } from '../_services/pager.service';
import { Models } from './dropdown-list.component.models';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent implements OnInit {

  //#region  Input and Output property
  @Input() objectList = [];
  @Input() displayProperty = '';
  @Input() value = '';
  @Input() defaultName = '';
  @Output() selectedValue = new EventEmitter<string>();
  //#endregion

  allItems: Array<Models> = [];
  selectedItem = 'Select Item';
  visibleCard = false;

  //#region  Paging property
  pager: any = {};
  pagedItems: Array<Models> = [];
  //#endregion

  constructor(private pagerService: PagerService) {
  }

  ngOnInit(): void {
    this.objectList.forEach(item => {
      this.allItems.push({ Key: item[this.value], Value: item[this.displayProperty] });
    });

    this.setPage(1);
  }
  setPage(page: number): void {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  onDropDownBtnClick(): void {
    this.visibleCard = !this.visibleCard;
  }
  onSelectItem(item: any): void {
    this.visibleCard = false;
    this.selectedItem = item.Value;
    this.selectedValue.emit(item.Key);
  }
}
