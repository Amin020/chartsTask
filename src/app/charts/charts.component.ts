import { Component, OnInit, Input } from '@angular/core';
import { colorSets } from './../JsonFiles/colorSchema';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Input('jsonData') jsonData;
  @Input('chartType') chartType;
  @Input('colorName') colorName;

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Year';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  colorSets;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor() {
    Object.assign(this, {colorSets});
  }

  ngOnInit() {
  }

  showAllCharts() {
    this.chartType = 'All';
  }

  onSelect(event) {
    console.log(event);
  }

  getDomain() {
    for (let i = 0; i < colorSets.length; i++) {
      if (colorSets[i].name === this.colorName) {
        this.colorScheme.domain = colorSets[i].domain;
        return this.colorScheme;
      }
    }
  }

}
