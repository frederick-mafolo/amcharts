import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppConfig } from '../../app.config'; 
import { MatCardModule } from '@angular/material/card';
import * as am4charts from "@amcharts/amcharts4/charts";

@Component({
  selector: 'app-scatter-chart',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './scatter-chart.component.html',
  styleUrl: './scatter-chart.component.css',
  
})
export class ScatterChartComponent implements OnInit, OnDestroy {
  private chart!: am4charts.XYChart;

  ngOnInit(): void {
    AppConfig.am4core.useTheme(AppConfig.am4themes_animated);

    let chart = AppConfig.am4core.create('scatterChartDiv', AppConfig.am4charts.XYChart);

    chart.data = [{
      'x': 10,
      'y': 20
    }, {
      'x': 15,
      'y': 25
    }, {
      'x': 20,
      'y': 30
    }];

    let xAxis = chart.xAxes.push(new AppConfig.am4charts.ValueAxis());
    xAxis.title.text = 'X Axis';

    let yAxis = chart.yAxes.push(new AppConfig.am4charts.ValueAxis());
    yAxis.title.text = 'Y Axis';

    let series = chart.series.push(new AppConfig.am4charts.LineSeries());
    series.dataFields.valueX = 'x';
    series.dataFields.valueY = 'y';

    this.chart = chart;
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}