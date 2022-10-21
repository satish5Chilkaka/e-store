import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caa',
  templateUrl: './caa.component.html',
  styleUrls: ['./caa.component.css']
})
export class CaaComponent implements OnInit {

  constructor() { }

  addStudentName = ''
  addStudentAge: any
  @Output() newStudentDetails = new EventEmitter<{ studentName: string, studentAge: number }>()

  addStudentData() {
    this.newStudentDetails.emit({
      studentName: this.addStudentName,
      studentAge: this.addStudentAge
    })
    console.log(this.addStudentName)
  }

  ngOnInit(): void {
  }

}
