import { Component, OnInit } from '@angular/core';

import moment from 'moment';

@Component({
  selector: 'demo-lib-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  dateTime: string;

  constructor() { }

  ngOnInit(): void {
    this.dateTime = moment().toString();
  }

}
