import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: `.app-servers`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverStatus: string = 'Server not yet created'
  reset: string = 'Server reset'
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }
  onServerCreate() {
    this.serverStatus = 'Server created'
  }
  onReset() {
    this.serverStatus = 'Server not yet created'
  }
  newServerName: string = ''
  updateServerName(event: any) {
    this.serverStatus = event.target.value
  }

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  ngOnInit(): void {
  }

}
