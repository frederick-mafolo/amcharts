import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppConfig } from '../../app.config'; 
import { MatCardModule } from '@angular/material/card';

import * as am4charts from "@amcharts/amcharts4/charts";

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent implements OnInit, OnDestroy {
  private chart!: am4charts.XYChart;

  ngOnInit(): void {
    AppConfig.am4core.useTheme(AppConfig.am4themes_animated);

    let chart = AppConfig.am4core.create('barChartDiv', AppConfig.am4charts.XYChart);

    chart.data = [{
      'category': 'Category 1',
      'value': 40
    }, {
      'category': 'Category 2',
      'value': 55
    },
    {
      'category': 'Category 3',
      'value': 30
    }, {
      'category': 'Category 4',
      'value': 67
    }, {
      'category': 'Category 5',
      'value': 70
    }];

    let categoryAxis = chart.xAxes.push(new AppConfig.am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';

    let valueAxis = chart.yAxes.push(new AppConfig.am4charts.ValueAxis());

    let series = chart.series.push(new AppConfig.am4charts.ColumnSeries());
    series.dataFields.valueY = 'value';
    series.dataFields.categoryX = 'category';

    this.chart = chart;
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}