import { Component, OnInit } from '@angular/core';

@Component({
  selector: './app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: any = 'Offline'
  constructor() {
    this.serverStatus = Math.random() * 10 > 5 ? 'Online' : 'Offline'
    console.log(Math.random() * 10)
  }

  getServerStatus() {
    this.serverStatus = Math.random() * 10 > 0.9 ? 'Online' : 'Offline'
  }
  serverCreated: boolean = false;
  serverName: string = ''
  onCreateServer() {
    this.serverCreated = true
    this.serverStatus = this.serverName
    console.log(this.serverName)
  }
  serverColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

  ngOnInit(): void {

  }

}
