import { Component, OnInit } from '@angular/core';
declare const PRIME: () => void;
@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.css']
})
export class SevenComponent implements OnInit {

  constructor() { }
  check()
  {
    PRIME();
  }
  ngOnInit(): void {
  }

}
