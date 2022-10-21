import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface storeItemsInterface {
  storeItemName: string,
  storeItemId: string,
  storeItemQuantity: string
}
@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {

  constructor() { }

  @Input() storeItemName: storeItemsInterface[];

  sName = '';
  sId = '';
  sAddress = '';
  @Output() storeNames = new EventEmitter<{ storeName: string, storeId: string, storeAddress: string }>()

  addStoreDetails() {
    this.storeNames.emit({
      storeName: this.sName,
      storeId: this.sId,
      storeAddress: this.sAddress
    })

  }

  ngOnInit(): void {
  }

}
