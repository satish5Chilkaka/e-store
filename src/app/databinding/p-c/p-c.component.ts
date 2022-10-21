import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-c',
  templateUrl: './p-c.component.html',
  styleUrls: ['./p-c.component.css']
})
export class PCComponent implements OnInit {

  constructor() { }

  newNames = ['a', '1', 'b', '2', 'c']

  ngOnInit(): void {
  }

}
