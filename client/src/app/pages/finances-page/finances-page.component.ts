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
  public financeData = {
    actualSpend: [],
    budget: []
  }

  constructor(private readonly _dataService: DataRetrievalService) {
  }

  ngOnInit() {

  }

  public setValues(e) {
    this.barChartData = [
      { data: [e.budget[0], e.budget[1], e.budget[2], 2], label: 'Budget', backgroundColor: ['#364F6B', '#364F6B', '#364F6B'] },
      { data: [e.actualSpend[0], e.actualSpend[1], e.actualSpend[2]], label: 'Actual Spend', backgroundColor: ['#d72323', '#d72323', '#d72323'] }
    ];

    this.financeData.actualSpend = e.actualSpend.map(x => x);
    this.financeData.budget = e.budget.map(x => x);
  }
}