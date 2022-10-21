import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch',
  templateUrl: './ch.component.html',
  styleUrls: ['./ch.component.css']
})
export class ChComponent implements OnInit {

  constructor() { }
  @Input() nNames: any;
  ngOnInit(): void {
  }

}
