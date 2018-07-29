import { Component } from '@angular/core';
import { single, multi } from './JsonFiles/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  single;
  multi;
  chartType;
  colorName = 'natural';
  constructor() {
    Object.assign(this, {single, multi});
  }
  setChartType(chart) {
    this.chartType = chart;
  }

}
