import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppConfig } from '../../app.config'; 
import { MatCardModule } from '@angular/material/card';
import * as am4charts from "@amcharts/amcharts4/charts";

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent implements OnInit, OnDestroy {
  private chart!: am4charts.PieChart;

  ngOnInit(): void {
    AppConfig.am4core.useTheme(AppConfig.am4themes_animated);

    let chart = AppConfig.am4core.create('pieChartDiv', AppConfig.am4charts.PieChart);

    chart.data = [{
      'category': 'Category A',
      'value': 35
    }, {
      'category': 'Category B',
      'value': 40
    }, {
      'category': 'Category C',
      'value': 25
    }];

    let pieSeries = chart.series.push(new AppConfig.am4charts.PieSeries());
    pieSeries.dataFields.value = 'value';
    pieSeries.dataFields.category = 'category';

    this.chart = chart;
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
