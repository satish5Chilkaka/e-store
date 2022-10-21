import { Component, OnInit } from '@angular/core';
export interface serverRec {
  serverName: string,
  serverId: string,
  serverType: string
}

@Component({
  selector: 'app-new-main',
  templateUrl: './new-main.component.html',
  styleUrls: ['./new-main.component.css']
})
export class NewMainComponent implements OnInit {

  constructor() { }

  serverRecords: serverRec[] = [{ serverName: '', serverId: '', serverType: '' }]

  addServerInfo(servers: serverRec) {
    this.serverRecords.push({
      serverName: servers.serverName,
      serverId: servers.serverId,
      serverType: servers.serverType
    })
    console.log(this.serverRecords)
  }

  ngOnInit(): void {
  }

}
