import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'demo-lib-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
