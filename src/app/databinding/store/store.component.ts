import { Component, OnInit } from '@angular/core';
import { storeItemsInterface } from './store-item/store-item.component';
export interface storeData {
  storeName: string,
  storeId: string,
  storeAddress: string
}
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor() { }

  storeItemsList: storeItemsInterface[] = [{ storeItemName: 'New Test item', storeItemId: '5425', storeItemQuantity: '0241' },
  { storeItemName: 'New Test item1', storeItemId: '598', storeItemQuantity: '525' },
  { storeItemName: 'New Test item2', storeItemId: '54525', storeItemQuantity: '410452' },
  { storeItemName: 'New Test item3', storeItemId: '458', storeItemQuantity: '54148' }]

  stores: storeData[] = [{ storeName: '', storeId: '', storeAddress: '' }]

  storeDetials(store: storeData) {
    this.stores.push({
      storeName: store.storeName,
      storeId: store.storeId,
      storeAddress: store.storeAddress
    })
    console.log(this.stores)
  }


  ngOnInit(): void {
  }

}
