import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppConfig } from '../../app.config'; 
import { MatCardModule } from '@angular/material/card';
import * as am4charts from "@amcharts/amcharts4/charts";

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit, OnDestroy {
  private chart!: am4charts.XYChart;

  ngOnInit(): void {
    AppConfig.am4core.useTheme(AppConfig.am4themes_animated);

    let chart = AppConfig.am4core.create('lineChartDiv', AppConfig.am4charts.XYChart);

    chart.data = [{
      'date': new Date(2020, 0, 1),
      'value': 50
    }, {
      'date': new Date(2020, 1, 1),
      'value': 70
    }, {
      'date': new Date(2020, 2, 1),
      'value': 65
    }, {
      'date': new Date(2020, 3, 1),
      'value': 40
    }, {
      'date': new Date(2020, 4, 1),
      'value': 100
    }, {
      'date': new Date(2020, 5, 1),
      'value': 25
    }];

    let dateAxis = chart.xAxes.push(new AppConfig.am4charts.DateAxis());

    let valueAxis = chart.yAxes.push(new AppConfig.am4charts.ValueAxis());

    let series = chart.series.push(new AppConfig.am4charts.LineSeries());
    series.dataFields.valueY = 'value';
    series.dataFields.dateX = 'date';

    this.chart = chart;
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}