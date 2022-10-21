import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-chi',
  templateUrl: './chi.component.html',
  styleUrls: ['./chi.component.css']
})
export class ChiComponent implements OnInit {


  constructor() { }

  @Output() storeItemName: any = new EventEmitter<{ storeNewItemName: string }>();
  sItemName = ''
  addNewItem() {
    this.storeItemName.emit({
      storeNewItemName: this.sItemName
    })

  }
  ngOnInit(): void {
  }

}
