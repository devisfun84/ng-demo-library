import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-lib-ng-demo-library',
  template: `
    <p>
      ng-demo-library works!
    </p>
  `,
  styles: [
  ]
})
export class NgDemoLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
