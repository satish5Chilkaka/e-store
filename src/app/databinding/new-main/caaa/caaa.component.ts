import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caaa',
  templateUrl: './caaa.component.html',
  styleUrls: ['./caaa.component.css']
})
export class CaaaComponent implements OnInit {

  constructor() { }

  sName = ''
  sId = ''
  sType = ''

  @Output() newServerInfo = new EventEmitter<{ serverName: string, serverId: string, serverType: string }>()

  addServerContent() {
    this.newServerInfo.emit({
      serverName: this.sName,
      serverId: this.sId,
      serverType: this.sType
    })
    console.log(this.sName)
  }


  ngOnInit(): void {
  }

}
