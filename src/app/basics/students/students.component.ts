import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  addNewStudents: boolean = false;
  newStudentName: string = ''
  newSName: string = ''
  studentStatus: string = 'Student not yet created'


  addSName() {
    this.studentStatus = 'Student Name is:' + this.newSName
  }
  constructor() {
    setTimeout(() => {
      this.addNewStudents = true
    }, 3000)
  }
  studentName(event: any) {

    this.newStudentName = event.target.value
  }
  newName: string = ''
  sName(event: any) {
    console.log(this.newName = event.target.value)
  }

  newUserName: string = ''
  userName(event: any) {
    this.newUserName = event.target.value
  }
  noUserName: string = ''
  resetUserName() {
    this.newUserName = this.noUserName;
  }
  ngOnInit(): void {
  }

}
