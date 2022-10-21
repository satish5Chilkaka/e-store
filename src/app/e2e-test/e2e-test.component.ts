import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e2e-test',
  templateUrl: './e2e-test.component.html',
  styleUrls: ['./e2e-test.component.css']
})
export class E2eTestComponent implements OnInit {
  sName: string = ''
  studentStatus: string = 'Student not yet created'
  constructor() { }

  addSName() {
    this.studentStatus = 'Student Name is:' + this.sName
  }
  ngOnInit(): void {
  }

}
