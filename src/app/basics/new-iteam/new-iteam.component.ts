import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-iteam',
  templateUrl: './new-iteam.component.html',
  styleUrls: ['./new-iteam.component.css']
})
export class NewIteamComponent implements OnInit {

  constructor() { }
  iName: string = ''
  ngOnInit(): void {
  }

}
