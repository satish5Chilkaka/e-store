import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  itemPosition: any
  count = 0
  constructor() {
    this.itemPosition = (Math.random() * 10 > 6) ? true : false

  }
  itemStatus: string = ''
  newItem: boolean = false
  itemNames: any = ['one']
  itemName: string = 'ABc'
  addItem() {
    this.newItem = true
    this.itemNames.push(this.itemName)
    this.itemStatus = 'Items name is :' + this.itemNames

  }
  itemColour() {
    return this.itemPosition === true ? 'green' : 'red'
  }
  ngOnInit(): void {
  }

}
