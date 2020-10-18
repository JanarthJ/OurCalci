import { Component, OnInit } from '@angular/core';
declare const CI: () => void;
@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent implements OnInit {

  
  constructor() { }
  press()
  {
    CI();
  }
  ngOnInit(): void {
  }

}
