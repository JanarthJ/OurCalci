import { Component } from '@angular/core';

export interface typetable {
  no: string;
  type: string;
}
const ELEMENT_DATA: typetable[] = [
  {no: '1', type: 'StandardCalci'},
  {no: '2', type: 'ScientificCalci'},
  {no: '3', type: 'AreaCalci'},
  {no:'4' , type: 'InterestCalci'},
  {no:'5' , type: 'BMICalci'},
  {no: '6', type: 'PrimeCalci'},
 
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  displayedColumns: string[] = ['no', 'type'];
  dataSource = ELEMENT_DATA
  title = 'OurCalculator';
  events: string[] = [];
  opened: boolean;
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  logo:string ="assets/images/favicon1.ico";
}




