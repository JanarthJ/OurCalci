import { Component, OnInit } from '@angular/core';
declare const BMI: () => void;

export interface BMIranges {
  range: string;
  status: string;
}
const ELEMENT_DATA: BMIranges[] = [
  {range: 'Below 18.5', status: 'Underweight'},
  {range: '18.5–24.9', status: 'Normal weight'},
  {range: '25.0–29.9', status: 'Pre-obesity'},
  {range:'30.0–34.9' , status: 'Obesity class I'},
  {range:'35.0–39.9' , status: 'Obesity class II'},
  {range: 'Above 40', status: 'Obesity class III'},
 
];


@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})


export class FourComponent implements OnInit {
  displayedColumns: string[] = ['range', 'status'];
  dataSource = ELEMENT_DATA
  constructor() { }
  save( )
    {
      BMI();
    }
  ngOnInit(): void {
  }

}
