import { Component, OnInit } from '@angular/core';
export interface item {
  storeNewItemName: string
}
@Component({
  selector: 'app-c-p',
  templateUrl: './c-p.component.html',
  styleUrls: ['./c-p.component.css']
})
export class CPComponent implements OnInit {


  constructor() { }

  newItemNames: item[] = [{ storeNewItemName: '' }]
  itemName(storeItemName: item) {
    this.newItemNames.push({
      storeNewItemName: storeItemName.storeNewItemName
    })
    console.log('newItemName', this.newItemNames)
  }
  ngOnInit(): void {
  }

}
