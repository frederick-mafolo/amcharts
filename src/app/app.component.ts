import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ScatterChartComponent } from './charts/scatter-chart/scatter-chart.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    ScatterChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'amcharts-app';
}
