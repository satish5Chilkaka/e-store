import { Component, OnInit } from '@angular/core';

export interface sData {
  studentName: string,
  studentAge: number
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }


  newStudentRecords: sData[] = [{ studentName: 'Test', studentAge: 1 }]

  newStudentData(newData: sData) {
    this.newStudentRecords.push({
      studentName: newData.studentName,
      studentAge: newData.studentAge
    })
    console.log(this.newStudentRecords)
  }

  ngOnInit(): void {
  }

}
