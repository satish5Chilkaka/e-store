import { Component } from '@angular/core';
export interface serverData {
  type: string,
  serverName: string,
  serverContent: string
}[]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //   styles: [`
  //  h3{
  //   color: blue
  //  }`]
})
export class AppComponent {
  serverCreated: serverData[] = [{ type: 'server', serverName: 'Test server', serverContent: 'Just a Server' }];

  title = 'e-store';
  fontSizePx = 16


  onServerAdded(serverData: serverData) {
    this.serverCreated.push({
      type: serverData.type,
      serverName: serverData.serverName,
      serverContent: serverData.serverContent

    })
    console.log(this.serverCreated)
  }
}
