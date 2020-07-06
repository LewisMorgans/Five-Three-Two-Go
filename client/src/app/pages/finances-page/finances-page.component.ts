import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-finances-page',
  templateUrl: './finances-page.component.html',
  styleUrls: ['./finances-page.component.scss']
})
export class FinancesPageComponent {


  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['50%', '30%', '20%'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [
  ];

  public barChartData: ChartDataSets[] = [
    { data: [1004.98, 758.63, 594.60], label: 'Budget', backgroundColor: ['#364F6B', '#364F6B', '#364F6B'] },
    { data: [1020, 740, 594.60], label: 'Actual Spend', backgroundColor: ['#d72323', '#d72323', '#d72323'] }
  ];





}