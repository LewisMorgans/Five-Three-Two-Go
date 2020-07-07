import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataRetrievalService } from 'src/app/services/data-retrieval.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-finances-page',
  templateUrl: './finances-page.component.html',
  styleUrls: ['./finances-page.component.scss']
})
export class FinancesPageComponent implements OnInit {


  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['50%', '30%', '20%'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[]
  public five;
  public three;
  public two;

  constructor(private readonly _dataService: DataRetrievalService) {
  }

  ngOnInit() {

  }

  public setValues(e: Event) {

    this.barChartData = [
      { data: [e[0], e[1], e[2], 0], label: 'Budget', backgroundColor: ['#364F6B', '#364F6B', '#364F6B'] },
      { data: [1020, 740, 594.60], label: 'Actual Spend', backgroundColor: ['#d72323', '#d72323', '#d72323'] }
    ];

    this.five = e[0];
    this.three = e[1];
    this.two = e[2];

  }
}