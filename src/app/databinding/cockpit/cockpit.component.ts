import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated: any = new EventEmitter<{ type: string, serverName: string, serverContent: string }>();
  // serverNames: any = []
  // serverName: string = ''
  // addServerName() {
  //   this.serverNames.push(this.serverName)
  // }

  // serverBluePrints: any = []
  // serverBluePrint: string = ''
  // addServerBluePrint() {
  //   this.serverBluePrints.push(this.serverBluePrint)
  // }

  newServerName = '';
  newServerContent = '';
  newType = '';

  onAddServer() {
    this.serverCreated.emit({
      type: this.newType,
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
    console.log(this.newServerName)
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  ngOnInit(): void {
  }


}
