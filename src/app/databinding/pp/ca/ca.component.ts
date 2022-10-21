import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-ca',
  templateUrl: './ca.component.html',
  styleUrls: ['./ca.component.css']
})
export class CaComponent implements OnInit {

  constructor() { }
  newSName = ''

  @Output() newStudentName = new EventEmitter<{ sName: string }>();
  addSName() {
    this.newStudentName.emit({
      sName: this.newSName

    })


  }
  ngOnInit(): void {

  }

}
