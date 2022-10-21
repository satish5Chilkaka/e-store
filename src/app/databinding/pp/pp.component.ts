import { Component, OnInit } from '@angular/core';
export interface student {
  sName: string;
}
@Component({
  selector: 'app-pp',
  templateUrl: './pp.component.html',
  styleUrls: ['./pp.component.css']
})
export class PpComponent implements OnInit {

  constructor() { }

  newName: student[] = [{ sName: '1' }]

  newAddedName(studentName: student) {
    this.newName.push({
      sName: studentName.sName
    })
    console.log('newName', this.newName)
  }
  ngOnInit(): void {
  }

}
