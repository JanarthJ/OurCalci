import { Component, OnInit } from '@angular/core';

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
export interface features {
  sno: string;
  feature: string;
}
const ELEMENTDATA: features[] = [
  {sno: '1', feature: ' Easy to access'},
  {sno: '2', feature: 'Quick response'},
  {sno: '3', feature: 'Time efficiency '},
  {sno: '4', feature: 'Fit to mobile screen'},
  {sno: '3', feature: 'colorful '}
];

export interface shape {
  
  shape: string;
}
const ELEMENTDATA1: shape[] = [
  { shape: 'Square'},
  { shape: 'Rectangle'},
  { shape: 'Triangle '},
  { shape: 'Circle'},
  { shape: 'Cylinder'},
  { shape: 'Sphere '},
  { shape: 'Cube'},
  { shape: 'Cone'},
  { shape: 'Parallogram'},
  { shape: 'Rhombus '},
   
];

@Component({
  selector: 'app-eight',
  templateUrl: './eight.component.html',
  styleUrls: ['./eight.component.css']
})
export class EightComponent implements OnInit {
  displayedColumns: string[] = ['no', 'type'];
  dataSource = ELEMENT_DATA
  displayedColumns1: string[] = ['sno', 'feature'];
  dataSource1 = ELEMENTDATA
  displayedColumns2: string[] = [ 'shape'];
  dataSource2 = ELEMENTDATA1
  constructor() { }

  ngOnInit(): void {
  }

}
