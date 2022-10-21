import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() {

  }
  showPassword = false
  newPassword: string = 'Some password = known'

  displayText: boolean = false
  count: number = 0
  numberOfClicks: any = []

  getCount() {
    this.numberOfClicks.push(new Date())

  }

  ngOnInit(): void {

  }

}
