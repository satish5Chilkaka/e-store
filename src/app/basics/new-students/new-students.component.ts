import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styleUrls: ['./new-students.component.css']
})
export class NewStudentsComponent implements OnInit {

  constructor() { }
  studentName: any = []
  sName: string = ''
  addName() {
    this.studentName.push(this.sName)
  }
  ngOnInit(): void {
  }

}
