import { Component, Input, OnInit } from '@angular/core';
export interface element {
  type: string
  serverName: string
  serverContent: string
}

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input() element: any;
  constructor() { }

  ngOnInit(): void {
    console.log('ele', this.element)
  }

}
